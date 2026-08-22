/*
    *  ------------------------------------------------------------------------------  *
    *  -----  route-proyecto-02-js.js  --  /src/routes/route-proyecto-02-js.js  -----  *
    *  ------------------------------------------------------------------------------  *
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
export const routeProyecto02JS = {
    id: 'js02',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 2 JavaScript',
    path: 'proyecto-02-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-02.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-02/proyecto-02-description.html`, target: '[data-component-page="proyecto02Description"]' },
        { url: `${pagesComponents}/proyecto-02/proyecto-02-demo.html`, target: '[data-component-page="proyecto02Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-02-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-02/proyecto-02-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-02`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-02-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-02.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-02`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-02-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-02.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-02`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 2 JavaScript',
    styles: [
        { href: `${styles}/styles-02.css` },
    ],
    scripts: [
        { src: `${scripts}/main-02.js` },
    ],
};
