/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-32-js.js  --  /src/routes/route-proyecto-32-js.js  -----  *
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
export const routeProyecto32JS = {
    id: 'js32',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 32 JavaScript',
    path: 'proyecto-32-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-32.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-32/proyecto-32-description.html`, target: '[data-component-page="proyecto32Description"]' },
        { url: `${pagesComponents}/proyecto-32/proyecto-32-demo.html`, target: '[data-component-page="proyecto32Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-32-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-32/proyecto-32-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-32`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-32-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-32.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-32`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-32-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-32.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-32`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 32 JavaScript',
    styles: [
        { href: `${styles}/styles-32.css` },
    ],
    scripts: [
        { src: `${scripts}/main-32.js` },
    ],
};
