/*
    *  --------------------------------------------------------------  *
    *  -----  preview-server.js  --  /server/preview-server.js  -----  *
    *  --------------------------------------------------------------  *
*/


import 'dotenv/config';

import express from 'express';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';


/** Prefijo URL que usa el base href del proyecto. */
const DEV_ROUTE_BASE = '/victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript';

/** Puerto público para previsualizar el build de producción. */
const PREVIEW_SERVER_PORT = Number(process.env.PREVIEW_SERVER_PORT || 4173);

/** Raíz del build de producción. */
const DIST_ROOT = path.join(process.cwd(), 'dist');

/** Archivo de entrada de la SPA compilada. */
const DIST_INDEX_FILE = path.join(DIST_ROOT, 'index.html');

if (!fs.existsSync(DIST_ROOT) || !fs.existsSync(DIST_INDEX_FILE)) {
    console.error('No existe un build de producción en dist/. Ejecuta `pnpm run build` antes de `pnpm run preview`.');
    process.exit(1);
}

const app = express();

app.disable('x-powered-by');

/**
 * Redirige la raíz del servidor al base path público de la SPA.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const redirectRootToBase = (req, res, next) => {
    if (req.path === '/' || req.path === '/index.html' || req.path === DEV_ROUTE_BASE) {
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
 * Hace fallback a index.html para rutas internas del build de la SPA.
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
        res.sendFile(DIST_INDEX_FILE);
        return;
    }

    const requestedPath = path.join(DIST_ROOT, relativePath);
    const hasFileExtension = path.extname(relativePath) !== '';
    const fileExists = fs.existsSync(requestedPath);

    if (!hasFileExtension && !fileExists) {
        res.sendFile(DIST_INDEX_FILE);
        return;
    }

    next();
};

app.use(redirectRootToBase);
app.use(makePhpHandler(DIST_ROOT, PREVIEW_SERVER_PORT));
app.use(DEV_ROUTE_BASE, express.static(DIST_ROOT, { index: false }));
app.use(serveSpaFallback);

app.use((req, res) => {
    res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});

const previewServer = app.listen(PREVIEW_SERVER_PORT, '127.0.0.1', () => {
    console.log(`\nPreview disponible en http://localhost:${PREVIEW_SERVER_PORT}${DEV_ROUTE_BASE}/\n`);
});

/** Cierre ordenado del servidor. */
const shutdown = () => {
    previewServer.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
