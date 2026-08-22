/*
    *  ------------------------------------------------------  *
    *  -----  dev-server.js  --  /server/dev-server.js  -----  *
    * ------------------------------------------------------  *
*/


import 'dotenv/config';

import browserSync from 'browser-sync';
import express from 'express';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';


/** Prefijo URL que usa el base href del proyecto. */
const DEV_ROUTE_BASE = '/victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript';

/** Puerto público del servidor de desarrollo. */
const DEV_SERVER_PORT = Number(process.env.DEV_SERVER_PORT || 3000);

/** Raíz real del proyecto. */
const PROJECT_ROOT = process.cwd();

/** Entrada principal de la SPA. */
const SPA_ENTRY_FILE = path.join(PROJECT_ROOT, 'index.html');

/** Archivos que deben disparar live reload (sin libs/assets estáticos pesados). */
const BROWSER_SYNC_FILES = [
    'index.html',
    'proyecto-06/**/*.html',
    'app/**/*.{html,css,js}',
    'assets/**/*',
    '!app/libs/**',
    '!app/fonts/**',
    '!app/pdfs/**',
    '!app/**/*.map',
];

/** Opciones de watch para BrowserSync (sin polling: Gulp ya vigila src/). */
const WATCH_OPTIONS = {
    ignoreInitial: true,
    usePolling: false,
    awaitWriteFinish: {
        stabilityThreshold: 300,
        pollInterval: 100,
    },
};

const app = express();
const bs = browserSync.create();

app.disable('x-powered-by');


/**
 * Redirige la raíz del servidor a la base pública de la SPA.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const redirectRootToBase = (req, res, next) => {
    if (req.path === '/' || req.path === '/index.html') {
        res.redirect(302, `${DEV_ROUTE_BASE}/`);
        return;
    }

    if (req.path === DEV_ROUTE_BASE) {
        res.redirect(302, `${DEV_ROUTE_BASE}/`);
        return;
    }

    next();
};


/**
 * Ejecuta archivos .php via php-cgi y devuelve la respuesta CGI al cliente.
 * @param {string} rootDir
 * @param {number} serverPort
 * @returns {import('express').RequestHandler}
 */
const makePhpHandler = (rootDir, serverPort) => (req, res, next) => {
    if (!req.path.endsWith('.php')) {
        next();
        return;
    }

    const relativePath = req.path.startsWith(DEV_ROUTE_BASE)
        ? req.path.slice(DEV_ROUTE_BASE.length).replace(/^\//, '')
        : req.path.replace(/^\//, '');

    const phpFile = path.join(rootDir, relativePath);

    if (!fs.existsSync(phpFile)) {
        next();
        return;
    }

    const queryString = req.originalUrl.includes('?')
        ? req.originalUrl.split('?')[1]
        : '';

    const cgiEnv = {
        ...process.env,
        REDIRECT_STATUS: '200',
        SCRIPT_FILENAME: phpFile,
        SCRIPT_NAME: req.path,
        REQUEST_METHOD: req.method,
        QUERY_STRING: queryString,
        CONTENT_TYPE: req.headers['content-type'] ?? '',
        CONTENT_LENGTH: req.headers['content-length'] ?? '0',
        SERVER_NAME: 'localhost',
        SERVER_PORT: String(serverPort),
        SERVER_PROTOCOL: 'HTTP/1.1',
        GATEWAY_INTERFACE: 'CGI/1.1',
        HTTP_HOST: req.headers['host'] ?? 'localhost',
        DOCUMENT_ROOT: rootDir,
    };

    const php = spawn('php-cgi', [], { env: cgiEnv });

    let stdout = Buffer.alloc(0);
    let stderr = '';

    php.stdout.on('data', (chunk) => {
        stdout = Buffer.concat([stdout, chunk]);
    });

    php.stderr.on('data', (chunk) => {
        stderr += chunk.toString();
    });

    php.on('close', () => {
        if (stderr) console.error(`[php-cgi] ${stderr.trim()}`);

        let sepIndex = stdout.indexOf('\r\n\r\n');
        let sepLen = 4;

        if (sepIndex === -1) {
            sepIndex = stdout.indexOf('\n\n');
            sepLen = 2;
        }

        if (sepIndex === -1) {
            res.status(500).send('Error: PHP no devolvió una respuesta CGI válida.');
            return;
        }

        const headersRaw = stdout.slice(0, sepIndex).toString();
        const body = stdout.slice(sepIndex + sepLen);

        for (const line of headersRaw.split(/\r?\n/)) {
            const colonIndex = line.indexOf(':');
            if (colonIndex === -1) continue;
            const name = line.slice(0, colonIndex).trim();
            const value = line.slice(colonIndex + 1).trim();
            if (name.toLowerCase() === 'status') {
                res.status(parseInt(value, 10));
            } else {
                res.setHeader(name, value);
            }
        }

        res.send(body);
    });

    php.on('error', () => {
        res.status(500).send('Error interno: php-cgi no está disponible. Instálalo con: sudo apt install php-cgi');
    });

    req.pipe(php.stdin);
};


/**
 * Hace fallback a index.html para rutas internas de la SPA.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const serveSpaFallback = (req, res, next) => {
    if (!req.path.startsWith(DEV_ROUTE_BASE)) {
        next();
        return;
    }

    const relativePath = req.path.slice(DEV_ROUTE_BASE.length).replace(/^\//, '');

    if (relativePath === '') {
        res.sendFile(SPA_ENTRY_FILE);
        return;
    }

    const requestedPath = path.join(PROJECT_ROOT, relativePath);
    const hasFileExtension = path.extname(relativePath) !== '';
    const fileExists = fs.existsSync(requestedPath);

    if (!hasFileExtension && !fileExists) {
        res.sendFile(SPA_ENTRY_FILE);
        return;
    }

    next();
};


/**
 * Verifica que el puerto público solicitado para BrowserSync esté libre.
 * @param {number} port
 * @returns {Promise<void>}
 */
const assertPortAvailable = (port) => new Promise((resolve, reject) => {
    const probeServer = net.createServer();

    probeServer.unref();

    probeServer.once('error', (error) => {
        if (error.code === 'EADDRINUSE') {
            reject(new Error(`El puerto público ${port} ya está en uso. Cierra la instancia anterior del servidor de desarrollo o cambia DEV_SERVER_PORT.`));
            return;
        }

        reject(error);
    });

    probeServer.once('listening', () => {
        probeServer.close((error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve();
        });
    });

    probeServer.listen(port);
});


/**
 * Sirve el proyecto 6 (página autocontenida, fuera de la SPA).
 * @param {string} rootDir
 * @returns {import('express').RequestHandler}
 */
const serveProyecto06 = (rootDir) => (req, res, next) => {
    const normalizedPath = req.path.replace(/\/+$/, '') || '/';
    const isProyecto06 =
        normalizedPath === `${DEV_ROUTE_BASE}/proyecto-06` ||
        normalizedPath === `${DEV_ROUTE_BASE}/proyecto-06/index.html`;

    if (!isProyecto06) {
        next();
        return;
    }

    const file = path.join(rootDir, 'proyecto-06', 'index.html');

    if (!fs.existsSync(file)) {
        next();
        return;
    }

    res.sendFile(path.resolve(file));
};


app.use(redirectRootToBase);
app.use(makePhpHandler(PROJECT_ROOT, DEV_SERVER_PORT));
app.use(serveProyecto06(PROJECT_ROOT));
app.use(DEV_ROUTE_BASE, express.static(PROJECT_ROOT, { index: 'index.html' }));
app.use(serveSpaFallback);

app.use((req, res) => {
    res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});


try {
    await assertPortAvailable(DEV_SERVER_PORT);
} catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
}


const internalServer = app.listen(0, '127.0.0.1', () => {
    const address = internalServer.address();

    if (!address || typeof address === 'string') {
        throw new Error('No se pudo resolver el puerto interno del servidor Express.');
    }

    console.log(`\nServidor de desarrollo Express escuchando en http://${address.address}:${address.port}\n`);

    bs.init({
        proxy: `http://127.0.0.1:${address.port}`,
        port: DEV_SERVER_PORT,
        open: false,
        notify: false,
        ui: false,
        startPath: `${DEV_ROUTE_BASE}/`,
        reloadDebounce: 500,
        files: BROWSER_SYNC_FILES,
        watchOptions: WATCH_OPTIONS,
    });
});


/** Cierre ordenado del servidor y BrowserSync. */
const shutdown = () => {
    bs.exit();
    internalServer.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
