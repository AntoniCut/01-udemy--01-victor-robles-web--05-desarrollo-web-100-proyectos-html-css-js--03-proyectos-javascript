/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-35-js.js  --  /src/routes/route-proyecto-35-js.js  -----  *
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
export const routeProyecto35JS = {
    id: 'js35',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 35 JavaScript',
    path: 'proyecto-35-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-35.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-35/proyecto-35-description.html`, target: '[data-component-page="proyecto35Description"]' },
        { url: `${pagesComponents}/proyecto-35/proyecto-35-demo.html`, target: '[data-component-page="proyecto35Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-35-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-35/proyecto-35-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-35`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-35-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-35.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-35`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-35-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-35.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-35`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 35 JavaScript',
    styles: [
        { href: `${styles}/styles-35.css` },
    ],
    scripts: [
        { src: `${scripts}/main-35.js` },
    ],
};
