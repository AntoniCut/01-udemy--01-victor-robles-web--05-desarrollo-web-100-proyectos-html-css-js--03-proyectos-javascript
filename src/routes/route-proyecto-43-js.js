/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-43-js.js  --  /src/routes/route-proyecto-43-js.js  -----  *
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
export const routeProyecto43JS = {
    id: 'js43',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 43 JavaScript',
    path: 'proyecto-43-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-43.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-43/proyecto-43-description.html`, target: '[data-component-page="proyecto43Description"]' },
        { url: `${pagesComponents}/proyecto-43/proyecto-43-demo.html`, target: '[data-component-page="proyecto43Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-43-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-43/proyecto-43-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-43`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-43-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-43.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-43`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-43-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-43.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-43`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 43 JavaScript',
    styles: [
        { href: `${styles}/styles-43.css` },
    ],
    scripts: [
        { src: `${scripts}/main-43.js` },
    ],
};
