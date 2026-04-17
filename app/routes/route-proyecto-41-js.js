/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-41-js.js  --  /src/routes/route-proyecto-41-js.js  -----  *
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
export const routeProyecto41JS = {
    id: 'js41',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 41 JavaScript',
    path: 'proyecto-41-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-41.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 41 JavaScript',
    styles: [
        { href: `${styles}/styles-41.css` },
    ],
    scripts: [
        { src: `${scripts}/main-41.js` },
    ],
};
