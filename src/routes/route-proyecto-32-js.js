/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-32-js.js  --  /src/routes/route-proyecto-32-js.js  -----  *
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
export const routeProyecto32JS = {
    id: 'js32',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 32 JavaScript',
    path: 'proyecto-32-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-32.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 32 JavaScript',
    styles: [
        { href: `${styles}/styles-32.css` },
    ],
    scripts: [
        { src: `${scripts}/main-32.js` },
    ],
};
