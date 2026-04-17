/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-08-js.js  --  /src/routes/route-proyecto-08-js.js  -----  *
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
export const routeProyecto08JS = {
    id: 'js08',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 8 JavaScript',
    path: 'proyecto-08-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-08.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 8 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-08.js` },
    ],
};
