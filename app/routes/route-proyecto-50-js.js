/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-50-js.js  --  /src/routes/route-proyecto-50-js.js  -----  *
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
export const routeProyecto50JS = {
    id: 'js50',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 50 JavaScript',
    path: 'proyecto-50-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-50.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 50 JavaScript',
    styles: [
        { href: `${styles}/styles-50.css` },
    ],
    scripts: [
        { src: `${scripts}/main-50.js` },
    ],
};
