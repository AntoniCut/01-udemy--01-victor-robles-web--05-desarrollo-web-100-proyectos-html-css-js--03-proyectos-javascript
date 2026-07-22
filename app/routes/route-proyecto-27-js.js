/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-27-js.js  --  /src/routes/route-proyecto-27-js.js  -----  *
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
export const routeProyecto27JS = {
    id: 'js27',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 27 JavaScript',
    path: 'proyecto-27-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-27.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-27/proyecto-27-description.html`, target: '[data-component-page="proyecto27Description"]' },
        { url: `${pagesComponents}/proyecto-27/proyecto-27-demo.html`, target: '[data-component-page="proyecto27Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-27-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-27/proyecto-27-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-27`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-27-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-27.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-27`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-27-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-27.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-27`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 27 JavaScript',
    styles: [
        { href: `${styles}/styles-27.css` },
    ],
    scripts: [
        { src: `${scripts}/main-27.js` },
    ],
};
