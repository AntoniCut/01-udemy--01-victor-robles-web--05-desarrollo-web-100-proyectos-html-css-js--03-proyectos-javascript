/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-30-js.js  --  /src/routes/route-proyecto-30-js.js  -----  *
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
export const routeProyecto30JS = {
    id: 'js30',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 30 JavaScript',
    path: 'proyecto-30-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-30.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 30 JavaScript',
    styles: [
        { href: `${styles}/styles-30.css` },
    ],
    scripts: [
        { src: `${scripts}/main-30.js` },
    ],
};
