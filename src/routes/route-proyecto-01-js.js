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
    layoutFooter, 
    styles, 
    scripts 
} = paths;

/** @type {Route} */
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
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 1 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-01.js` },
    ],
};
