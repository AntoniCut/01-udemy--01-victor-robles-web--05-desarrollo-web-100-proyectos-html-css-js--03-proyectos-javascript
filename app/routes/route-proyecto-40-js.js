/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-40-js.js  --  /src/routes/route-proyecto-40-js.js  -----  *
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
export const routeProyecto40JS = {
    id: 'js40',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 40 JavaScript',
    path: 'proyecto-40-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-40.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-40/proyecto-40-description.html`, target: '[data-component-page="proyecto40Description"]' },
        { url: `${pagesComponents}/proyecto-40/proyecto-40-demo.html`, target: '[data-component-page="proyecto40Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-40-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-40/proyecto-40-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-40`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-40-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-40.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-40`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-40-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-40.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-40`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 40 JavaScript',
    styles: [
        { href: `${styles}/styles-40.css` },
    ],
    scripts: [
        { src: `${scripts}/main-40.js` },
    ],
};
