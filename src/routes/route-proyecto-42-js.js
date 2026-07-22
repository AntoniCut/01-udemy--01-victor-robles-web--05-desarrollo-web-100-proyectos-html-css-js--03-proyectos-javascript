/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-42-js.js  --  /src/routes/route-proyecto-42-js.js  -----  *
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
export const routeProyecto42JS = {
    id: 'js42',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 42 JavaScript',
    path: 'proyecto-42-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-42.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 42 JavaScript',
    styles: [
        { href: `${styles}/styles-42.css` },
    ],
    scripts: [
        { src: `${scripts}/main-42.js` },
    ],
};
