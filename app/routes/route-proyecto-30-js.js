/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-30-js.js  --  /src/routes/route-proyecto-30-js.js  -----  *
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
export const routeProyecto30JS = {
    id: 'js30',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 30 JavaScript',
    path: 'proyecto-30-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-30.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-30/proyecto-30-description.html`, target: '[data-component-page="proyecto30Description"]' },
        { url: `${pagesComponents}/proyecto-30/proyecto-30-demo.html`, target: '[data-component-page="proyecto30Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-30-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-30/proyecto-30-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-30`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-30-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-30.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-30`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-30-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-30.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-30`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 30 JavaScript',
    styles: [
        { href: `${styles}/styles-30.css` },
    ],
    scripts: [
        { src: `${scripts}/main-30.js` },
    ],
};
