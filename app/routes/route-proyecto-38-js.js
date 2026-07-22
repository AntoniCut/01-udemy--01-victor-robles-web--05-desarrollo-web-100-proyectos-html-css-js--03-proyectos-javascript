/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-38-js.js  --  /src/routes/route-proyecto-38-js.js  -----  *
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
export const routeProyecto38JS = {
    id: 'js38',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 38 JavaScript',
    path: 'proyecto-38-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-38.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-38/proyecto-38-description.html`, target: '[data-component-page="proyecto38Description"]' },
        { url: `${pagesComponents}/proyecto-38/proyecto-38-demo.html`, target: '[data-component-page="proyecto38Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-38-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-38/proyecto-38-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-38`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-38-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-38.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-38`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-38-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-38.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-38`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 38 JavaScript',
    styles: [
        { href: `${styles}/styles-38.css` },
    ],
    scripts: [
        { src: `${scripts}/main-38.js` },
    ],
};
