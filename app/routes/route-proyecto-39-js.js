/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-39-js.js  --  /src/routes/route-proyecto-39-js.js  -----  *
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
export const routeProyecto39JS = {
    id: 'js39',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 39 JavaScript',
    path: 'proyecto-39-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-39.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 39 JavaScript',
    styles: [
        { href: `${styles}/styles-39.css` },
    ],
    scripts: [
        { src: `${scripts}/main-39.js` },
    ],
};
