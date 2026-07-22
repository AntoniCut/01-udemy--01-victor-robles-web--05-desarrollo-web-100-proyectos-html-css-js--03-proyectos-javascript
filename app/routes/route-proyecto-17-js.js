/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-17-js.js  --  /src/routes/route-proyecto-17-js.js  -----  *
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
export const routeProyecto17JS = {
    id: 'js17',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 17 JavaScript',
    path: 'proyecto-17-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-17.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-17/proyecto-17-description.html`, target: '[data-component-page="proyecto17Description"]' },
        { url: `${pagesComponents}/proyecto-17/proyecto-17-demo.html`, target: '[data-component-page="proyecto17Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-17-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-17/proyecto-17-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-17`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-17-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-17.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-17`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-17-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-17.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-17`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 17 JavaScript',
    styles: [
        { href: `${styles}/styles-17.css` },
    ],
    scripts: [
        { src: `${scripts}/main-17.js` },
    ],
};
