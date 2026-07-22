/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-46-js.js  --  /src/routes/route-proyecto-46-js.js  -----  *
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
export const routeProyecto46JS = {
    id: 'js46',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 46 JavaScript',
    path: 'proyecto-46-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-46.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 46 JavaScript',
    styles: [
        { href: `${styles}/styles-46.css` },
    ],
    scripts: [
        { src: `${scripts}/main-46.js` },
    ],
};
