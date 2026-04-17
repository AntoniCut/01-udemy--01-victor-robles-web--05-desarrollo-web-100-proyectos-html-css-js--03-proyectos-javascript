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
export const routeProyecto21JQueryUI = {
    id: 'js21JQueryUI',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 21 jQuery UI',
    path: 'proyecto-21-jquery-ui',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-21-jquery-ui.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'Proyecto 21 jQuery UI',
    styles: [
        { href: `${styles}/styles-21.css` },
    ],
    scripts: [
        { src: `${scripts}/main-21-jquery-ui.js` },
    ],
};
