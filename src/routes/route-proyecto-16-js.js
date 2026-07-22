/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-16-js.js  --  /src/routes/route-proyecto-16-js.js  -----  *
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
export const routeProyecto16JS = {
    id: 'js16',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 16 JavaScript',
    path: 'proyecto-16-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-16.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-16/proyecto-16-description.html`, target: '[data-component-page="proyecto16Description"]' },
        { url: `${pagesComponents}/proyecto-16/proyecto-16-demo.html`, target: '[data-component-page="proyecto16Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-16-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-16/proyecto-16-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-16`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-16-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-16.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-16`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-16-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-16.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-16`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 16 JavaScript',
    styles: [
        { href: `${styles}/styles-16.css` },
    ],
    scripts: [
        { src: `${scripts}/main-16.js` },
    ],
};
