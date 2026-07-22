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
    layoutFooter, 
    styles, 
    scripts 
} = paths;

/** @type {Route} */
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
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 11 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-11.js` },
    ],
};
