/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-36-js.js  --  /src/routes/route-proyecto-36-js.js  -----  *
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
export const routeProyecto36JS = {
    id: 'js36',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 36 JavaScript',
    path: 'proyecto-36-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-36.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 36 JavaScript',
    styles: [
        { href: `${styles}/styles-36.css` },
    ],
    scripts: [
        { src: `${scripts}/main-36.js` },
    ],
};
