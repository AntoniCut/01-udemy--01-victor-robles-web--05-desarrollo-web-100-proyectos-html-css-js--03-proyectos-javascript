/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-37-js.js  --  /src/routes/route-proyecto-37-js.js  -----  *
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
export const routeProyecto37JS = {
    id: 'js37',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 37 JavaScript',
    path: 'proyecto-37-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-37.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 37 JavaScript',
    styles: [
        { href: `${styles}/styles-37.css` },
    ],
    scripts: [
        { src: `${scripts}/main-37.js` },
    ],
};
