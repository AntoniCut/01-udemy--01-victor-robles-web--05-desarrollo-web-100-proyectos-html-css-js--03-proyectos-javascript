/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-45-js.js  --  /src/routes/route-proyecto-45-js.js  -----  *
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
export const routeProyecto45JS = {
    id: 'js45',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 45 JavaScript',
    path: 'proyecto-45-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-45.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 45 JavaScript',
    styles: [
        { href: `${styles}/styles-45.css` },
    ],
    scripts: [
        { src: `${scripts}/main-45.js` },
    ],
};
