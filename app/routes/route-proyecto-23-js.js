/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-23-js.js  --  /src/routes/route-proyecto-23-js.js  -----  *
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
export const routeProyecto23JS = {
    id: 'js23',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 23 JavaScript',
    path: 'proyecto-23-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-23.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-23/proyecto-23-description.html`, target: '[data-component-page="proyecto23Description"]' },
        { url: `${pagesComponents}/proyecto-23/proyecto-23-demo.html`, target: '[data-component-page="proyecto23Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-23-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-23/proyecto-23-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-23`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-23-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-23.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-23`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-23-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-23.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-23`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 23 JavaScript',
    styles: [
        { href: `${styles}/styles-23.css` },
    ],
    scripts: [
        { src: `${scripts}/main-23.js` },
    ],
};
