/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-28-js.js  --  /src/routes/route-proyecto-28-js.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';

const {
    favicon,
    layoutHeader,
    layoutNavbar,
    pages,
    pagesComponents,
    pagesComponentsSrc,
    MarkdownShikiHtml,
    layoutFooter,
    styles,
    scripts,
    scriptsSrc,
} = paths;


/** @type {import("../../types/index.js").Route} */
export const routeProyecto28JS = {
    id: 'js28',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 28 JavaScript',
    path: 'proyecto-28-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-28.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-28/proyecto-28-description.html`, target: '[data-component-page="proyecto28Description"]' },
        { url: `${pagesComponents}/proyecto-28/proyecto-28-demo.html`, target: '[data-component-page="proyecto28Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-28-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-28/proyecto-28-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-28`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-28-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-28.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-28`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-28-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-28.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-28`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 28 JavaScript',
    styles: [
        { href: `${styles}/styles-28.css` },
    ],
    scripts: [
        { src: `${scripts}/main-28.js` },
    ],
};
