/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-19-js.js  --  /src/routes/route-proyecto-19-js.js  -----  *
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
export const routeProyecto19JS = {
    id: 'js19',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 19 JavaScript',
    path: 'proyecto-19-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-19.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 19 JavaScript',
    styles: [
        { href: `${styles}/styles-19.css` },
    ],
    scripts: [
        { src: `${scripts}/main-19.js` },
    ],
};
