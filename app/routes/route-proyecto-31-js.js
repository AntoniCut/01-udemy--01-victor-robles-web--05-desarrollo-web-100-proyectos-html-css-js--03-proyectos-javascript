/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-31-js.js  --  /src/routes/route-proyecto-31-js.js  -----  *
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
export const routeProyecto31JS = {
    id: 'js31',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 31 JavaScript',
    path: 'proyecto-31-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-31.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 31 JavaScript',
    styles: [
        { href: `${styles}/styles-31.css` },
    ],
    scripts: [
        { src: `${scripts}/main-31.js` },
    ],
};
