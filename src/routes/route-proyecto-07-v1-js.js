/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  route-proyecto-07-v1-js.js  --  /src/routes/route-proyecto-07-v1-js.js  -----  *
    *  ------------------------------------------------------------------------------------  *
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
export const routeProyecto07V1JS = {
    id: 'js07V1',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 7 Version 1 JavaScript',
    path: 'proyecto-07-v1-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-07-v1.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-07-v1/proyecto-07-v1-description.html`, target: '[data-component-page="proyecto07V1Description"]' },
        { url: `${pagesComponents}/proyecto-07-v1/proyecto-07-v1-demo.html`, target: '[data-component-page="proyecto07V1Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-07-v1-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-07-v1/proyecto-07-v1-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-07-v1`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-07-v1-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-07-v1.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-07-v1`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-07-v1-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-07-v1.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-07-v1`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 7 Version 1 JavaScript',
    styles: [
        { href: `${styles}/styles-07-v1.css` },
    ],
    scripts: [
        { src: `${scripts}/main-07-v1.js` },
    ],
};
