/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-03-js.js  --  /src/routes/route-proyecto-03-js.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';


const { 
    favicon, 
    layoutHeader, 
    layoutNavbar, 
    pages, 
    layoutFooter, 
    styles, 
    scripts 
} = paths;

/** @type {Route} */
export const routeProyecto03JS = {
    id: 'js03',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 3 JavaScript',
    path: 'proyecto-03-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-03.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 3 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-03.js` },
    ],
};
