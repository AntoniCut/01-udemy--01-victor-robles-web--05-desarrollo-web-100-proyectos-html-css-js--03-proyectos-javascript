/*
    *  ---------------------------------------------------------------------------------------  *
    *  -----  /route-404-not-found-page.js  --  /src/routes/route-404-not-found-page.js  -----  *
    *  ---------------------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, layoutFooter } = paths;

/** @type {import("../../types/index.js").Route} */
export const route404NotFoundPage = {
    id: '404NotFoundPage',
    favicon: `${favicon}`,
    pageTitle: '404 - Pagina no encontrada',
    path: '404-not-found-page',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/404/404-not-found-page.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: '404 - Pagina no encontrada',
    styles: [],
    scripts: [],
}
