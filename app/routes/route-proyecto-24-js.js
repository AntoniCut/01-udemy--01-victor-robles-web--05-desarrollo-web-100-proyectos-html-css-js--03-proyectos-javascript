/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-24-js.js  --  /src/routes/route-proyecto-24-js.js  -----  *
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
export const routeProyecto24JS = {
    id: 'js24',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 24 JavaScript',
    path: 'proyecto-24-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-24.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 24 JavaScript',
    styles: [
        { href: `${styles}/styles-24.css` },
    ],
    scripts: [
        { src: `${scripts}/main-24.js` },
    ],
};
