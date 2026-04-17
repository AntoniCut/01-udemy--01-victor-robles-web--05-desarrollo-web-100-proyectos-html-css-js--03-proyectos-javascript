/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-35-js.js  --  /src/routes/route-proyecto-35-js.js  -----  *
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
export const routeProyecto35JS = {
    id: 'js35',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 35 JavaScript',
    path: 'proyecto-35-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-35.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 35 JavaScript',
    styles: [
        { href: `${styles}/styles-35.css` },
    ],
    scripts: [
        { src: `${scripts}/main-35.js` },
    ],
};
