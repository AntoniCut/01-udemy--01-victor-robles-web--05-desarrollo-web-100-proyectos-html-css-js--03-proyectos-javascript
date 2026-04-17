/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-28-js.js  --  /src/routes/route-proyecto-28-js.js  -----  *
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
export const routeProyecto28JS = {
    id: 'js28',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 28 JavaScript',
    path: 'proyecto-28-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-28.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 28 JavaScript',
    styles: [
        { href: `${styles}/styles-28.css` },
    ],
    scripts: [
        { src: `${scripts}/main-28.js` },
    ],
};
