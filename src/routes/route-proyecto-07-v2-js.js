/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-07-js.js  --  /src/routes/route-proyecto-07-js.js  -----  *
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
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 7 Version 2 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-07-v2.js` },
    ],
};
