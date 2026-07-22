/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-39-js.js  --  /src/routes/route-proyecto-39-js.js  -----  *
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
export const routeProyecto39JS = {
    id: 'js39',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 39 JavaScript',
    path: 'proyecto-39-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-39.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-39/proyecto-39-description.html`, target: '[data-component-page="proyecto39Description"]' },
        { url: `${pagesComponents}/proyecto-39/proyecto-39-demo.html`, target: '[data-component-page="proyecto39Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-39-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-39/proyecto-39-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-39`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-39-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-39.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-39`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-39-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-39.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-39`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 39 JavaScript',
    styles: [
        { href: `${styles}/styles-39.css` },
    ],
    scripts: [
        { src: `${scripts}/main-39.js` },
    ],
};
