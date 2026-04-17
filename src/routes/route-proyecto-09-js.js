/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-09-js.js  --  /src/routes/route-proyecto-09-js.js  -----  *
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
export const routeProyecto09JS = {
    id: 'js09',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 9 JavaScript',
    path: 'proyecto-09-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-09.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 9 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-09.js` },
    ],
};
