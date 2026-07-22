/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-49-js.js  --  /src/routes/route-proyecto-49-js.js  -----  *
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
export const routeProyecto49JS = {
    id: 'js49',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 49 JavaScript',
    path: 'proyecto-49-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-49.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 49 JavaScript',
    styles: [
        { href: `${styles}/styles-49.css` },
    ],
    scripts: [
        { src: `${scripts}/main-49.js` },
    ],
};
