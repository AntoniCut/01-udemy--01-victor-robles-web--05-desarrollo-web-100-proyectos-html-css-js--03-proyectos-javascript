/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-42-js.js  --  /src/routes/route-proyecto-42-js.js  -----  *
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
export const routeProyecto42JS = {
    id: 'js42',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 42 JavaScript',
    path: 'proyecto-42-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-42.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-42/proyecto-42-description.html`, target: '[data-component-page="proyecto42Description"]' },
        { url: `${pagesComponents}/proyecto-42/proyecto-42-demo.html`, target: '[data-component-page="proyecto42Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-42-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-42/proyecto-42-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-42`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-42-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-42.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-42`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-42-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-42.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-42`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 42 JavaScript',
    styles: [
        { href: `${styles}/styles-42.css` },
    ],
    scripts: [
        { src: `${scripts}/main-42.js` },
    ],
};
