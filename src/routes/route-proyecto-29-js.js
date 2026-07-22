/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-29-js.js  --  /src/routes/route-proyecto-29-js.js  -----  *
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
export const routeProyecto29JS = {
    id: 'js29',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 29 JavaScript',
    path: 'proyecto-29-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-29.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 29 JavaScript',
    styles: [
        { href: `${styles}/styles-29.css` },
    ],
    scripts: [
        { src: `${scripts}/main-29.js` },
    ],
};
