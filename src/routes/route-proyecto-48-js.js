/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-48-js.js  --  /src/routes/route-proyecto-48-js.js  -----  *
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
export const routeProyecto48JS = {
    id: 'js48',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 48 JavaScript',
    path: 'proyecto-48-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-48.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 48 JavaScript',
    styles: [
        { href: `${styles}/styles-48.css` },
    ],
    scripts: [
        { src: `${scripts}/main-48.js` },
    ],
};
