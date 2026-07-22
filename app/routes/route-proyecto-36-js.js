/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-36-js.js  --  /src/routes/route-proyecto-36-js.js  -----  *
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
export const routeProyecto36JS = {
    id: 'js36',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 36 JavaScript',
    path: 'proyecto-36-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-36.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-36/proyecto-36-description.html`, target: '[data-component-page="proyecto36Description"]' },
        { url: `${pagesComponents}/proyecto-36/proyecto-36-demo.html`, target: '[data-component-page="proyecto36Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-36-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-36/proyecto-36-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-36`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-36-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-36.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-36`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-36-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-36.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-36`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 36 JavaScript',
    styles: [
        { href: `${styles}/styles-36.css` },
    ],
    scripts: [
        { src: `${scripts}/main-36.js` },
    ],
};
