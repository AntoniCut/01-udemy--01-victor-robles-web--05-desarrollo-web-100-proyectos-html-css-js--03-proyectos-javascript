/*
    *  ------------------------------------------------------------------------------  *
    *  -----  route-proyecto-01-js.js  --  /src/routes/route-proyecto-01-js.js  -----  *
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
export const routeProyecto01JS = {
    id: 'js01',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 1 JavaScript',
    path: 'proyecto-01-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-01.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-01/proyecto-01-description.html`, target: '[data-component-page="proyecto01Description"]' },
        { url: `${pagesComponents}/proyecto-01/proyecto-01-demo.html`, target: '[data-component-page="proyecto01Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-01-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-01/proyecto-01-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-01`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-01-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-01.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-01`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-01-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-01.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-01`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 1 JavaScript',
    styles: [
        { href: `${styles}/styles-01.css` },
    ],
    scripts: [
        { src: `${scripts}/main-01.js` },
    ],
};
