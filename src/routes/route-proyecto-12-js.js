/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-12-js.js  --  /src/routes/route-proyecto-12-js.js  -----  *
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
export const routeProyecto12JS = {
    id: 'js12',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 12 JavaScript',
    path: 'proyecto-12-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-12.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-12/proyecto-12-description.html`, target: '[data-component-page="proyecto12Description"]' },
        { url: `${pagesComponents}/proyecto-12/proyecto-12-demo.html`, target: '[data-component-page="proyecto12Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-12-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-12/proyecto-12-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-12`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-12-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-12.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-12`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-12-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-12.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-12`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 12 JavaScript',
    styles: [
        { href: `${styles}/styles-12.css` },
    ],
    scripts: [
        { src: `${scripts}/main-12.js` },
    ],
};
