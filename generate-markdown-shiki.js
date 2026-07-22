/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /generate-markdown-shiki.js  -----------------------------------------  *
    *  -----------------------------------------------------------------------------  *
    *                                                                                 *
    *  Lee las rutas del SPA, deriva los archivos fuente por convención de            *
    *  nombres, y genera los bloques HTML resaltados con Shiki en                     *
    *  src/markdown-shiki/ (misma estructura que route.MarkdownShikiHtml;            *
    *  gulp copia luego a app/markdown-shiki/).                                      *
    *                                                                                 *
    *  Uso: pnpm code-highlight                                                       *
    *                                                                                 *
 *  Convención de nombres:                                                         *
 *    .../nombre-html.html   →  src/pages-components/nombre.html                   *
 *    .../nombre-css.html    →  app/css/pages/nombre.css                           *
 *    .../nombre-scss.html   →  src/scss/pages/nombre.scss                         *
 *    .../nombre-js.html     →  src/scripts/pages/nombre.js                        *
 *    .../main-01-js.html    →  src/scripts/pages/main-01.js   (scripts del SPA)  *
 *    .../styles-05-css.html →  app/css/pages/styles-05.css    (estilos del SPA)   *
    *    .../plugins/...-js.html → src/plugins/...                                    *
    *                                                                                 *
    *  -----------------------------------------------------------------------------  *
*/


import { codeToHtml } from 'shiki';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


/** @typedef {import('./types/index.js').Route} Route */
/** @typedef {import('./types/index.js').MarkdownShikiEntry} MarkdownShikiEntry */
/** @typedef {Record<string, Route>} RouteModule */


/**
 * @typedef {Object} ShikiGenResult
 * @property {'generated' | 'skipped'} status
 * @property {string} message
 */


const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const MARKER = 'markdown-shiki/';
const SHIKI_THEME = 'dark-plus';
const STRIP_HEADER_BANNER = true;
const BANNER_PATTERN = /-----/;


/**
 * A partir del path URL de un archivo .html en markdown-shiki, deduce el archivo fuente.
 * @param {string} htmlUrlPath
 * @returns {{ srcPath: string, lang: string, relHtml: string } | null}
 */
const deriveSource = (htmlUrlPath) => {
    const idx = htmlUrlPath.indexOf(MARKER);
    if (idx === -1) return null;

    const relHtml = htmlUrlPath.slice(idx + MARKER.length);
    const fileName = relHtml.split('/').pop() ?? relHtml;

    if (fileName.endsWith('-html.html')) {
        const relSrc = fileName.replace(/-html\.html$/, '.html');
        return {
            srcPath: join(__dirname, 'src/pages-components', relSrc),
            lang: 'html',
            relHtml,
        };
    }

    if (fileName.endsWith('-css.html')) {
        const relSrc = fileName.replace(/-css\.html$/, '.css');
        return {
            srcPath: join(__dirname, 'app/css/pages', relSrc),
            lang: 'css',
            relHtml,
        };
    }

    if (fileName.endsWith('-scss.html')) {
        const relSrc = fileName.replace(/-scss\.html$/, '.scss');
        return {
            srcPath: join(__dirname, 'src/scss/pages', relSrc),
            lang: 'scss',
            relHtml,
        };
    }

    if (fileName.endsWith('-js.html')) {
        if (relHtml.startsWith('plugins/')) {
            const pluginRelSrc = relHtml.replace(/-js\.html$/, '.js').replace(/^plugins\//, '');
            return {
                srcPath: join(__dirname, 'src/plugins', pluginRelSrc),
                lang: 'javascript',
                relHtml,
            };
        }

        const relSrc = fileName.replace(/-js\.html$/, '.js');
        return {
            srcPath: join(__dirname, 'src/scripts/pages', relSrc),
            lang: 'javascript',
            relHtml,
        };
    }

    return null;
};


/**
 * Elimina bloques de comentario tipo banner al inicio del código fuente.
 * @param {string} code
 * @returns {string}
 */
const stripHeaderBanner = (code) => {
    code = code.replace(/^(?:\/\/\s*@ts-nocheck\s*\n|"\s*use strict\s*"\s*;\s*\n)+/, '');

    const ANY_COMMENT_RE = /\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|\/\/[^\n]*\n/g;

    let firstIdx = -1;
    let firstEnd = -1;

    for (const m of code.matchAll(ANY_COMMENT_RE)) {
        if (BANNER_PATTERN.test(m[0])) {
            firstIdx = m.index;
            firstEnd = m.index + m[0].length;
            break;
        }
    }

    if (firstIdx === -1) return code;

    let endIdx = firstEnd;
    const COMMENT_AFTER_BANNER_RE = /^\s*(?:\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|\/\/[^\n]*\n)/;

    while (true) {
        const rest = code.slice(endIdx);
        const match = rest.match(COMMENT_AFTER_BANNER_RE);
        if (!match) break;
        if (!BANNER_PATTERN.test(match[0])) break;
        endIdx += match[0].length;
    }

    const before = code.slice(0, firstIdx);
    const after = code.slice(endIdx).replace(/^\s*\n/, '');

    return (before + after).replace(/^\s*\n/, '');
};


/**
 * Genera bloques HTML resaltados con Shiki en src/markdown-shiki/.
 * @returns {Promise<{ generated: number, skipped: number }>}
 */
export const generateMarkdownShiki = async () => {
    const routesDir = join(__dirname, 'src/routes');
    const routeFiles = readdirSync(routesDir).filter(
        (f) => f.startsWith('route-') && f.endsWith('.js') && f !== 'route-manifest.js'
    );

    /** @type {Set<string>} */
    const htmlPaths = new Set();

    for (const file of routeFiles) {
        /** @type {RouteModule} */
        const mod = await import(`./src/routes/${file}`);

        /** @type {Route | undefined} */
        const route = Object.values(mod).find(
            (v) => v && typeof v === 'object' && Array.isArray(v.MarkdownShikiHtml)
        );

        if (route?.MarkdownShikiHtml) {
            for (const entry of route.MarkdownShikiHtml) {
                if (entry.url) htmlPaths.add(entry.url);
            }
        }
    }

    /** @type {ShikiGenResult[]} */
    const results = await Promise.all(
        [...htmlPaths].map(async (htmlPath) => {
            const derived = deriveSource(htmlPath);

            if (!derived) {
                return {
                    status: 'skipped',
                    message: `⚠️  No se puede derivar el fuente para: ${htmlPath}`,
                };
            }

            const { srcPath, lang, relHtml } = derived;
            const outPath = join(__dirname, 'src/markdown-shiki', relHtml);

            if (!existsSync(srcPath)) {
                const rel = srcPath.replace(__dirname + '/', '');
                return {
                    status: 'skipped',
                    message: `⚠️  Fuente no encontrado: ${htmlPath}\n     Esperado en: ${rel}`,
                };
            }

            const rawCode = readFileSync(srcPath, 'utf-8');
            const code = STRIP_HEADER_BANNER ? stripHeaderBanner(rawCode) : rawCode;
            const html = await codeToHtml(code, { lang, theme: SHIKI_THEME });

            mkdirSync(dirname(outPath), { recursive: true });
            writeFileSync(outPath, html, 'utf-8');

            const relOut = outPath.replace(__dirname + '/', '');

            return {
                status: 'generated',
                message: `✅  ${relOut}`,
            };
        })
    );

    for (const r of results) console.log(r.message);

    const generated = results.filter((r) => r.status === 'generated').length;
    const skipped = results.filter((r) => r.status === 'skipped').length;

    console.log(`\n🎉  Completado — generados: ${generated} | omitidos: ${skipped}`);

    return { generated, skipped };
};


if (process.argv[1] === __filename) {
    await generateMarkdownShiki();
}
