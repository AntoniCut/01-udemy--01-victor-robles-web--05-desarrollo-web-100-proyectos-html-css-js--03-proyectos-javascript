/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-20-js.js  --  /src/routes/route-proyecto-20-js.js  -----  *
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
export const routeProyecto20JS = {
    id: 'js20',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 20 JavaScript',
    path: 'proyecto-20-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-20.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-20/proyecto-20-description.html`, target: '[data-component-page="proyecto20Description"]' },
        { url: `${pagesComponents}/proyecto-20/proyecto-20-demo.html`, target: '[data-component-page="proyecto20Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-20-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-20/proyecto-20-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-20`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-20-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-20.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-20`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-20-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-20.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-20`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 20 JavaScript',
    styles: [
        { href: `${styles}/styles-20.css` },
    ],
    scripts: [
        { src: `${scripts}/main-20.js` },
    ],
};
