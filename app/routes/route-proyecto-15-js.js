/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-15-js.js  --  /src/routes/route-proyecto-15-js.js  -----  *
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
export const routeProyecto15JS = {
    id: 'js15',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 15 JavaScript',
    path: 'proyecto-15-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-15.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [],
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 15 JavaScript',
    styles: [
        { href: `${styles}/styles-15.css` },
    ],
    scripts: [
        { src: `${scripts}/main-15.js` },
    ],
};
