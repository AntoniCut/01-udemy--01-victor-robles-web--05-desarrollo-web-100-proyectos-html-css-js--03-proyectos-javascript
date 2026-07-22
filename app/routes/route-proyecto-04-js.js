/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-04-js.js  --  /src/routes/route-proyecto-04-js.js  -----  *
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
export const routeProyecto04JS = {
    id: 'js04',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 4 JavaScript',
    path: 'proyecto-04-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-04.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 4 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-04.js` },
    ],
};
