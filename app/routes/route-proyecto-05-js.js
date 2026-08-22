/*
    *  ------------------------------------------------------------------------------  *
    *  -----  route-proyecto-05-js.js  --  /src/routes/route-proyecto-05-js.js  -----  *
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
export const routeProyecto05JS = {
    id: 'js05',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 5 JavaScript',
    path: 'proyecto-05-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-05.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-05/proyecto-05-description.html`, target: '[data-component-page="proyecto05Description"]' },
        { url: `${pagesComponents}/proyecto-05/proyecto-05-demo.html`, target: '[data-component-page="proyecto05Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-05-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-05/proyecto-05-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-05`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-05-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-05.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-05`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-05-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-05.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-05`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 5 JavaScript',
    styles: [
        { href: `${styles}/styles-05.css` },
    ],
    scripts: [
        { src: `${scripts}/main-05.js` },
    ],
};
