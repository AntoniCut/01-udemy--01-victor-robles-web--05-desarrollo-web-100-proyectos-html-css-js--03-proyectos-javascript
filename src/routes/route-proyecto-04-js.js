/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-04-js.js  --  /src/routes/route-proyecto-04-js.js  -----  *
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
export const routeProyecto04JS = {
    id: 'js04',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 4 JavaScript',
    path: 'proyecto-04-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-04.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-04/proyecto-04-description.html`, target: '[data-component-page="proyecto04Description"]' },
        { url: `${pagesComponents}/proyecto-04/proyecto-04-demo.html`, target: '[data-component-page="proyecto04Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-04-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-04/proyecto-04-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-04`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-04-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-04.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-04`,
            target: '[data-shiki="codeJs"]',
        },
    ],
    headerTitle: 'Proyecto 4 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-04.js` },
    ],
};
