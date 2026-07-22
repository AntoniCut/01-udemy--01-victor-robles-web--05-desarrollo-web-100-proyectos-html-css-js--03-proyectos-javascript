/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-18-js.js  --  /src/routes/route-proyecto-18-js.js  -----  *
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
export const routeProyecto18JS = {
    id: 'js18',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 18 JavaScript',
    path: 'proyecto-18-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-18.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-18/proyecto-18-description.html`, target: '[data-component-page="proyecto18Description"]' },
        { url: `${pagesComponents}/proyecto-18/proyecto-18-demo.html`, target: '[data-component-page="proyecto18Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-18-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-18/proyecto-18-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-18`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-18-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-18.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-18`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-18-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-18.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-18`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 18 JavaScript',
    styles: [
        { href: `${styles}/styles-18.css` },
    ],
    scripts: [
        { src: `${scripts}/main-18.js` },
    ],
};
