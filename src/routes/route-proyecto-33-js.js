/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-33-js.js  --  /src/routes/route-proyecto-33-js.js  -----  *
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
export const routeProyecto33JS = {
    id: 'js33',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 33 JavaScript',
    path: 'proyecto-33-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-33.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 33 JavaScript',
    styles: [
        { href: `${styles}/styles-33.css` },
    ],
    scripts: [
        { src: `${scripts}/main-33.js` },
    ],
};
