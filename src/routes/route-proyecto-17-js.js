/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-17-js.js  --  /src/routes/route-proyecto-17-js.js  -----  *
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
export const routeProyecto17JS = {
    id: 'js17',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 17 JavaScript',
    path: 'proyecto-17-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-17.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 17 JavaScript',
    styles: [
        { href: `${styles}/styles-17.css` },
    ],
    scripts: [
        { src: `${scripts}/main-17.js` },
    ],
};
