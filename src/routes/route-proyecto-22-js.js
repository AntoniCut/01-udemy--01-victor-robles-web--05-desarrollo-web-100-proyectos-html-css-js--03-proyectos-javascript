/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-22-js.js  --  /src/routes/route-proyecto-22-js.js  -----  *
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
export const routeProyecto22JS = {
    id: 'js22',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 22 JavaScript',
    path: 'proyecto-22-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-22.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 22 JavaScript',
    styles: [
        { href: `${styles}/styles-22.css` },
    ],
    scripts: [
        { src: `${scripts}/main-22.js` },
    ],
};
