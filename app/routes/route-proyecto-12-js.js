/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-12-js.js  --  /src/routes/route-proyecto-12-js.js  -----  *
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
export const routeProyecto12JS = {
    id: 'js12',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 12 JavaScript',
    path: 'proyecto-12-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-12.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 12 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-12.js` },
    ],
};
