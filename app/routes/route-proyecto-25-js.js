/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-25-js.js  --  /src/routes/route-proyecto-25-js.js  -----  *
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
export const routeProyecto25JS = {
    id: 'js25',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 25 JavaScript',
    path: 'proyecto-25-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-25.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-25/proyecto-25-description.html`, target: '[data-component-page="proyecto25Description"]' },
        { url: `${pagesComponents}/proyecto-25/proyecto-25-demo.html`, target: '[data-component-page="proyecto25Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-25-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-25/proyecto-25-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-25`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-25-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-25.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-25`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-25-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-25.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-25`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 25 JavaScript',
    styles: [
        { href: `${styles}/styles-25.css` },
    ],
    scripts: [
        { src: `${scripts}/main-25.js` },
    ],
};
