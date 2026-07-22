/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-29-js.js  --  /src/routes/route-proyecto-29-js.js  -----  *
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
export const routeProyecto29JS = {
    id: 'js29',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 29 JavaScript',
    path: 'proyecto-29-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-29.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-29/proyecto-29-description.html`, target: '[data-component-page="proyecto29Description"]' },
        { url: `${pagesComponents}/proyecto-29/proyecto-29-demo.html`, target: '[data-component-page="proyecto29Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-29-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-29/proyecto-29-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-29`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-29-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-29.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-29`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-29-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-29.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-29`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 29 JavaScript',
    styles: [
        { href: `${styles}/styles-29.css` },
    ],
    scripts: [
        { src: `${scripts}/main-29.js` },
    ],
};
