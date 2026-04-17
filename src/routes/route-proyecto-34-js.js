/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-34-js.js  --  /src/routes/route-proyecto-34-js.js  -----  *
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
export const routeProyecto34JS = {
    id: 'js34',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 34 JavaScript',
    path: 'proyecto-34-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-34.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 34 JavaScript',
    styles: [
        { href: `${styles}/styles-34.css` },
    ],
    scripts: [
        { src: `${scripts}/main-34.js` },
    ],
};
