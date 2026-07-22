/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-45-js.js  --  /src/routes/route-proyecto-45-js.js  -----  *
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
export const routeProyecto45JS = {
    id: 'js45',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 45 JavaScript',
    path: 'proyecto-45-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-45.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-45/proyecto-45-description.html`, target: '[data-component-page="proyecto45Description"]' },
        { url: `${pagesComponents}/proyecto-45/proyecto-45-demo.html`, target: '[data-component-page="proyecto45Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-45-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-45/proyecto-45-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-45`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-45-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-45.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-45`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-45-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-45.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-45`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 45 JavaScript',
    styles: [
        { href: `${styles}/styles-45.css` },
    ],
    scripts: [
        { src: `${scripts}/main-45.js` },
    ],
};
