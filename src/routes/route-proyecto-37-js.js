/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-37-js.js  --  /src/routes/route-proyecto-37-js.js  -----  *
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
export const routeProyecto37JS = {
    id: 'js37',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 37 JavaScript',
    path: 'proyecto-37-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-37.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-37/proyecto-37-description.html`, target: '[data-component-page="proyecto37Description"]' },
        { url: `${pagesComponents}/proyecto-37/proyecto-37-demo.html`, target: '[data-component-page="proyecto37Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-37-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-37/proyecto-37-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-37`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-37-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-37.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-37`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-37-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-37.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-37`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 37 JavaScript',
    styles: [
        { href: `${styles}/styles-37.css` },
    ],
    scripts: [
        { src: `${scripts}/main-37.js` },
    ],
};
