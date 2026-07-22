/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-41-js.js  --  /src/routes/route-proyecto-41-js.js  -----  *
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
export const routeProyecto41JS = {
    id: 'js41',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 41 JavaScript',
    path: 'proyecto-41-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-41.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-41/proyecto-41-description.html`, target: '[data-component-page="proyecto41Description"]' },
        { url: `${pagesComponents}/proyecto-41/proyecto-41-demo.html`, target: '[data-component-page="proyecto41Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-41-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-41/proyecto-41-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-41`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-41-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-41.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-41`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-41-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-41.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-41`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 41 JavaScript',
    styles: [
        { href: `${styles}/styles-41.css` },
    ],
    scripts: [
        { src: `${scripts}/main-41.js` },
    ],
};
