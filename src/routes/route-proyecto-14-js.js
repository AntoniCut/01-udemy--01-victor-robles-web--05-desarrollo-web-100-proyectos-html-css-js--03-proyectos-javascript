/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-14-js.js  --  /src/routes/route-proyecto-14-js.js  -----  *
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
export const routeProyecto14JS = {
    id: 'js14',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 14 JavaScript',
    path: 'proyecto-14-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-14.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-14/proyecto-14-description.html`, target: '[data-component-page="proyecto14Description"]' },
        { url: `${pagesComponents}/proyecto-14/proyecto-14-demo.html`, target: '[data-component-page="proyecto14Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-14-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-14/proyecto-14-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-14`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-14-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-14.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-14`,
            target: '[data-shiki="codeJs"]',
        },
    ],
    headerTitle: 'Proyecto 14 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-14.js` },
    ],
};
