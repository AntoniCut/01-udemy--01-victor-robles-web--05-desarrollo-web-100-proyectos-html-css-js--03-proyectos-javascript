/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-07-v2-js.js  --  /src/routes/route-proyecto-07-v2-js.js  -----  *
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
export const routeProyecto07V2JS = {
    id: 'js07V2',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 7 Version 2 JavaScript',
    path: 'proyecto-07-v2-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-07-v2.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-07-v2/proyecto-07-v2-description.html`, target: '[data-component-page="proyecto07V2Description"]' },
        { url: `${pagesComponents}/proyecto-07-v2/proyecto-07-v2-demo.html`, target: '[data-component-page="proyecto07V2Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-07-v2-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-07-v2/proyecto-07-v2-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-07-v2`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-07-v2-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-07-v2.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-07-v2`,
            target: '[data-shiki="codeJs"]',
        },
    ],
    headerTitle: 'Proyecto 7 Version 2 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-07-v2.js` },
    ],
};
