/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-25-js.js  --  /src/routes/route-proyecto-25-js.js  -----  *
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
export const routeProyecto25JS = {
    id: 'js25',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 25 JavaScript',
    path: 'proyecto-25-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-25.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 25 JavaScript',
    styles: [
        { href: `${styles}/styles-25.css` },
    ],
    scripts: [
        { src: `${scripts}/main-25.js` },
    ],
};
