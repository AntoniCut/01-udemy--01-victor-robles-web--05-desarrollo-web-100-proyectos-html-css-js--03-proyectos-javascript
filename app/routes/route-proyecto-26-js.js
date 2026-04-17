/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-26-js.js  --  /src/routes/route-proyecto-26-js.js  -----  *
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
export const routeProyecto26JS = {
    id: 'js26',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 26 JavaScript',
    path: 'proyecto-26-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-26.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 26 JavaScript',
    styles: [
        { href: `${styles}/styles-26.css` },
    ],
    scripts: [
        { src: `${scripts}/main-26.js` },
    ],
};
