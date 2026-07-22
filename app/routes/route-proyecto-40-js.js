/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-40-js.js  --  /src/routes/route-proyecto-40-js.js  -----  *
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
export const routeProyecto40JS = {
    id: 'js40',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 40 JavaScript',
    path: 'proyecto-40-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-40.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 40 JavaScript',
    styles: [
        { href: `${styles}/styles-40.css` },
    ],
    scripts: [
        { src: `${scripts}/main-40.js` },
    ],
};
