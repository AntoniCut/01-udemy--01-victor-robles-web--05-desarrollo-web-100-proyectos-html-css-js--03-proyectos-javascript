/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-18-js.js  --  /src/routes/route-proyecto-18-js.js  -----  *
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
export const routeProyecto18JS = {
    id: 'js18',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 18 JavaScript',
    path: 'proyecto-18-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-18.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 18 JavaScript',
    styles: [
        { href: `${styles}/styles-18.css` },
    ],
    scripts: [
        { src: `${scripts}/main-18.js` },
    ],
};
