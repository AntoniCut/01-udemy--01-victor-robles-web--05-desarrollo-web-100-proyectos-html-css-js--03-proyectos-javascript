/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-27-js.js  --  /src/routes/route-proyecto-27-js.js  -----  *
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
export const routeProyecto27JS = {
    id: 'js27',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 27 JavaScript',
    path: 'proyecto-27-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-27.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 27 JavaScript',
    styles: [
        { href: `${styles}/styles-27.css` },
    ],
    scripts: [
        { src: `${scripts}/main-27.js` },
    ],
};
