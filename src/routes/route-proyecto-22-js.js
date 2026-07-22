/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-22-js.js  --  /src/routes/route-proyecto-22-js.js  -----  *
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
export const routeProyecto22JS = {
    id: 'js22',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 22 JavaScript',
    path: 'proyecto-22-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-22.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-22/proyecto-22-description.html`, target: '[data-component-page="proyecto22Description"]' },
        { url: `${pagesComponents}/proyecto-22/proyecto-22-demo.html`, target: '[data-component-page="proyecto22Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-22-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-22/proyecto-22-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-22`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-22-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-22.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-22`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-22-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-22.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-22`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 22 JavaScript',
    styles: [
        { href: `${styles}/styles-22.css` },
    ],
    scripts: [
        { src: `${scripts}/main-22.js` },
    ],
};
