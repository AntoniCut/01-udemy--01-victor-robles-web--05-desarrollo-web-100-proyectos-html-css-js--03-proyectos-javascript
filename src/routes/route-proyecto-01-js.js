/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-01-js.js  --  /src/routes/route-proyecto-01-js.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';


const { 
    favicon, 
    layoutHeader, 
    layoutNavbar, 
    pages, 
    pagesComponents,
    MarkdownShikiHtml,
    layoutFooter, 
    styles, 
    scripts 
} = paths;


/** @type {import("../../types/index.js").Route} */

export const routeProyecto01JS = {
    id: 'js01',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 1 JavaScript',
    path: 'proyecto-01-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-01.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-01.html`, target: '[data-component-page="proyecto01"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/proyecto-01/proyecto-01-html.html`, target: '[data-shiki="codeHtml"]' },
        { url: `${MarkdownShikiHtml}/proyecto-01/main-01-js.html`, target: '[data-shiki="codeJs"]' },
    ],
    headerTitle: 'Proyecto 1 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-01.js` },
    ],
};
