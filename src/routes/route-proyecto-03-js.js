/*
    *  ------------------------------------------------------------------------------  *
    *  -----  route-proyecto-03-js.js  --  /src/routes/route-proyecto-03-js.js  -----  *
    *  ------------------------------------------------------------------------------  *
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
export const routeProyecto03JS = {
    id: 'js03',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 3 JavaScript',
    path: 'proyecto-03-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-03.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-03/proyecto-03-description.html`, target: '[data-component-page="proyecto03Description"]' },
        { url: `${pagesComponents}/proyecto-03/proyecto-03-demo.html`, target: '[data-component-page="proyecto03Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-03-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-03/proyecto-03-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-03`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-03-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-03.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-03`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-03-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-03.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-03`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 3 JavaScript',
    styles: [
        { href: `${styles}/styles-03.css` },
    ],
    scripts: [
        { src: `${scripts}/main-03.js` },
    ],
};
