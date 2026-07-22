/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-44-js.js  --  /src/routes/route-proyecto-44-js.js  -----  *
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
export const routeProyecto44JS = {
    id: 'js44',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 44 JavaScript',
    path: 'proyecto-44-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-44.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-44/proyecto-44-description.html`, target: '[data-component-page="proyecto44Description"]' },
        { url: `${pagesComponents}/proyecto-44/proyecto-44-demo.html`, target: '[data-component-page="proyecto44Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-44-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-44/proyecto-44-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-44`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-44-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-44.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-44`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-44-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-44.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-44`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 44 JavaScript',
    styles: [
        { href: `${styles}/styles-44.css` },
    ],
    scripts: [
        { src: `${scripts}/main-44.js` },
    ],
};
