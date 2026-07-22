/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-31-js.js  --  /src/routes/route-proyecto-31-js.js  -----  *
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
export const routeProyecto31JS = {
    id: 'js31',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 31 JavaScript',
    path: 'proyecto-31-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-31.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-31/proyecto-31-description.html`, target: '[data-component-page="proyecto31Description"]' },
        { url: `${pagesComponents}/proyecto-31/proyecto-31-demo.html`, target: '[data-component-page="proyecto31Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-31-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-31/proyecto-31-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-31`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-31-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-31.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-31`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-31-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-31.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-31`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 31 JavaScript',
    styles: [
        { href: `${styles}/styles-31.css` },
    ],
    scripts: [
        { src: `${scripts}/main-31.js` },
    ],
};
