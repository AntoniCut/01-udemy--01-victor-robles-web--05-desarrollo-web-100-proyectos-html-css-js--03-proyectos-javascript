/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-16-js.js  --  /src/routes/route-proyecto-16-js.js  -----  *
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
export const routeProyecto16JS = {
    id: 'js16',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 16 JavaScript',
    path: 'proyecto-16-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-16.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 16 JavaScript',
    styles: [
        { href: `${styles}/styles-16.css` },
    ],
    scripts: [
        { src: `${scripts}/main-16.js` },
    ],
};
