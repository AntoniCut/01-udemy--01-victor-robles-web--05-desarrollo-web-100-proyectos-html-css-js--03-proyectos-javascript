/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-14-js.js  --  /src/routes/route-proyecto-14-js.js  -----  *
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
export const routeProyecto14JS = {
    id: 'js14',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 14 JavaScript',
    path: 'proyecto-14-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-14.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 14 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-14.js` },
    ],
};
