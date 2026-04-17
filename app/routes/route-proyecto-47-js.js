/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-47-js.js  --  /src/routes/route-proyecto-47-js.js  -----  *
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
export const routeProyecto47JS = {
    id: 'js47',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 47 JavaScript',
    path: 'proyecto-47-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-47.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 47 JavaScript',
    styles: [
        { href: `${styles}/styles-47.css` },
    ],
    scripts: [
        { src: `${scripts}/main-47.js` },
    ],
};
