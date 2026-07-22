/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-38-js.js  --  /src/routes/route-proyecto-38-js.js  -----  *
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
export const routeProyecto38JS = {
    id: 'js38',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 38 JavaScript',
    path: 'proyecto-38-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-38.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 38 JavaScript',
    styles: [
        { href: `${styles}/styles-38.css` },
    ],
    scripts: [
        { src: `${scripts}/main-38.js` },
    ],
};
