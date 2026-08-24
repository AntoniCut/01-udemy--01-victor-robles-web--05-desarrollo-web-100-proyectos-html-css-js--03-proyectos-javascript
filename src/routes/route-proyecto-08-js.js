/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-08-js.js  --  /src/routes/route-proyecto-08-js.js  -----  *
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
export const routeProyecto08JS = {
    id: 'js08',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 8 JavaScript',
    path: 'proyecto-08-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-08.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-08/proyecto-08-description.html`, target: '[data-component-page="proyecto08Description"]' },
        { url: `${pagesComponents}/proyecto-08/proyecto-08-demo.html`, target: '[data-component-page="proyecto08Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-08-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-08/proyecto-08-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-08`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-08-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-08.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-08`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-08-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-08.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-08`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 8 JavaScript',
    styles: [
        { href: `${styles}/styles-08.css` },
    ],
    scripts: [
        { src: `${scripts}/main-08.js` },
    ],
};
