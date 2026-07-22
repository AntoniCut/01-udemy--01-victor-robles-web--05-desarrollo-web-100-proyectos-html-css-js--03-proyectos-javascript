/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-02-js.js  --  /src/routes/route-proyecto-02-js.js  -----  *
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
export const routeProyecto02JS = {
    id: 'js02',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 2 JavaScript',
    path: 'proyecto-02-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-02.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 2 JavaScript',
    styles: [],
    scripts: [
        { src: `${scripts}/main-02.js` },
    ],
};
