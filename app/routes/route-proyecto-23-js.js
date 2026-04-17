/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-23-js.js  --  /src/routes/route-proyecto-23-js.js  -----  *
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
export const routeProyecto23JS = {
    id: 'js23',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 23 JavaScript',
    path: 'proyecto-23-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-23.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 23 JavaScript',
    styles: [
        { href: `${styles}/styles-23.css` },
    ],
    scripts: [
        { src: `${scripts}/main-23.js` },
    ],
};
