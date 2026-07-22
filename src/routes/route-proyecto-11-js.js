/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-11-js.js  --  /src/routes/route-proyecto-11-js.js  -----  *
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
export const routeProyecto11JS = {
    id: 'js11',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 11 JavaScript',
    path: 'proyecto-11-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-11.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-11/proyecto-11-description.html`, target: '[data-component-page="proyecto11Description"]' },
        { url: `${pagesComponents}/proyecto-11/proyecto-11-demo.html`, target: '[data-component-page="proyecto11Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-11-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-11/proyecto-11-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-11`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-11-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-11.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-11`,
            target: '[data-shiki="codeJs"]',
        },
    ],
    headerTitle: 'Proyecto 11 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-11.js` },
    ],
};
