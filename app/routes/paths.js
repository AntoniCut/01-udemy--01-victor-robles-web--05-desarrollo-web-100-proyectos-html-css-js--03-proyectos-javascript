/*
    *  -------------------------------------------------  *
    *  -----  /paths.js  --  /src/routes/paths.js  -----  *
    *  -------------------------------------------------  *
*/


/** @type {string} `-----  Base del proyecto  -----` */
export const base = '/victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript';


/** - `Rutas centralizadas (con base) usadas por las rutas del SPA` */
export const paths = {

    //  ----------  Recursos servidos (post-build en app/)  ----------
    favicon: `${base}/assets/favicon/javascript-favicon.ico`,
    layoutHeader: `${base}/app/components/layouts/layout-header.html`,
    layoutNavbar: `${base}/app/components/layouts/layout-navbar.html`,
    pages: `${base}/app/pages`,
    pagesComponents: `${base}/app/pages-components`,
    MarkdownShikiHtml: `${base}/app/markdown-shiki`,
    layoutFooter: `${base}/app/components/layouts/layout-footer.html`,
    styles: `${base}/app/css/pages`,
    scripts: `${base}/app/js/pages`,

    //  ----------  Fuentes (src/) para generar los bloques Shiki (deben existir en disco)  ----------
    pagesComponentsSrc: `${base}/src/pages-components`,
    scriptsSrc: `${base}/src/scripts/pages`,
    scssPages: `${base}/src/scss/pages`,
    pluginsSource: `${base}/src/plugins`,
};
