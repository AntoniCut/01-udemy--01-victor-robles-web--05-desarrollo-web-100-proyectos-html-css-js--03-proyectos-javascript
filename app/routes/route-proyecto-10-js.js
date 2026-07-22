/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-10-js.js  --  /src/routes/route-proyecto-10-js.js  -----  *
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
    scripts,
    scriptsSrc,
} = paths;


/** @type {import("../../types/index.js").Route} */
export const routeProyecto10JS = {
    id: 'js10',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 10 JavaScript',
    path: 'proyecto-10-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-10.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-10/proyecto-10-description.html`, target: '[data-component-page="proyecto10Description"]' },
        { url: `${pagesComponents}/proyecto-10/proyecto-10-demo.html`, target: '[data-component-page="proyecto10Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-10-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-10/proyecto-10-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-10`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-10-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-10.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-10`,
            target: '[data-shiki="codeJs"]',
        },
    ],
    headerTitle: 'Proyecto 10 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-10.js` },
    ],
};
