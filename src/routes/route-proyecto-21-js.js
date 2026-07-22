/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-21-js.js  --  /src/routes/route-proyecto-21-js.js  -----  *
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
export const routeProyecto21JS = {
    id: 'js21',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 21 JavaScript',
    path: 'proyecto-21-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-21.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 21 JavaScript',
    styles: [
        { href: `${styles}/styles-21.css` },
    ],
    scripts: [
        { src: `${scripts}/main-21.js` },
    ],
};

