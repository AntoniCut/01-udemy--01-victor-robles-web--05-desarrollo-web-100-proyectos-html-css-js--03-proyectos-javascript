/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-44-js.js  --  /src/routes/route-proyecto-44-js.js  -----  *
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
export const routeProyecto44JS = {
    id: 'js44',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 44 JavaScript',
    path: 'proyecto-44-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-44.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 44 JavaScript',
    styles: [
        { href: `${styles}/styles-44.css` },
    ],
    scripts: [
        { src: `${scripts}/main-44.js` },
    ],
};
