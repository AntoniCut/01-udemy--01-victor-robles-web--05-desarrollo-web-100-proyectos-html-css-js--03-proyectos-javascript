/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-05-js.js  --  /src/routes/route-proyecto-05-js.js  -----  *
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
export const routeProyecto05V1JS = {
    id: 'js05V1',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 5 Version 1 JavaScript',
    path: 'proyecto-05-v1-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-05-v1.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 5 Version 1 JavaScript',
    styles: [
        { href: `${styles}/styles-05.css` },
    ],
    scripts: [
        { src: `${scripts}/main-05-v1.js` },
    ],
};
