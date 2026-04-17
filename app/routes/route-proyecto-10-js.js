/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-10-js.js  --  /src/routes/route-proyecto-10-js.js  -----  *
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
export const routeProyecto10JS = {
    id: 'js10',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 10 JavaScript',
    path: 'proyecto-10-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-10.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 10 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-10.js` },
    ],
};
