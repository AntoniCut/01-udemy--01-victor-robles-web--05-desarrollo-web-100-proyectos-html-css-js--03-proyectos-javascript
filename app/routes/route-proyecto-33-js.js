/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-33-js.js  --  /src/routes/route-proyecto-33-js.js  -----  *
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
export const routeProyecto33JS = {
    id: 'js33',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 33 JavaScript',
    path: 'proyecto-33-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-33.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-33/proyecto-33-description.html`, target: '[data-component-page="proyecto33Description"]' },
        { url: `${pagesComponents}/proyecto-33/proyecto-33-demo.html`, target: '[data-component-page="proyecto33Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-33-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-33/proyecto-33-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-33`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-33-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-33.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-33`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-33-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-33.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-33`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 33 JavaScript',
    styles: [
        { href: `${styles}/styles-33.css` },
    ],
    scripts: [
        { src: `${scripts}/main-33.js` },
    ],
};
