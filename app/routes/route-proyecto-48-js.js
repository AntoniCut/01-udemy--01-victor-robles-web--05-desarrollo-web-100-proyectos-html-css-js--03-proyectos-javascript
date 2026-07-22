/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-48-js.js  --  /src/routes/route-proyecto-48-js.js  -----  *
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
export const routeProyecto48JS = {
    id: 'js48',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 48 JavaScript',
    path: 'proyecto-48-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-48.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-48/proyecto-48-description.html`, target: '[data-component-page="proyecto48Description"]' },
        { url: `${pagesComponents}/proyecto-48/proyecto-48-demo.html`, target: '[data-component-page="proyecto48Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-48-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-48/proyecto-48-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-48`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-48-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-48.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-48`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-48-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-48.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-48`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 48 JavaScript',
    styles: [
        { href: `${styles}/styles-48.css` },
    ],
    scripts: [
        { src: `${scripts}/main-48.js` },
    ],
};
