/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-20-js.js  --  /src/routes/route-proyecto-20-js.js  -----  *
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
export const routeProyecto20JS = {
    id: 'js20',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 20 JavaScript',
    path: 'proyecto-20-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-20.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 20 JavaScript',
    styles: [
        { href: `${styles}/styles-20.css` },
    ],
    scripts: [
        { src: `${scripts}/main-20.js` },
    ],
};
