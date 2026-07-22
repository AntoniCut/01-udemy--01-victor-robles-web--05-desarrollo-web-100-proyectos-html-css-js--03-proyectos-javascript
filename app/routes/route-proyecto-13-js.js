/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-13-js.js  --  /src/routes/route-proyecto-13-js.js  -----  *
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
export const routeProyecto13JS = {
    id: 'js13',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 13 JavaScript',
    path: 'proyecto-13-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-13.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 13 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-13.js` },
    ],
};
