/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-00-home.js  --  /src/routes/route-00-home.js  -----  *
    *  -----------------------------------------------------------------  *
*/


import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, layoutFooter, styles } = paths;


/** @type {import("../../types/index.js").Route} */
export const route00Home = {
    id: 'home',
    favicon: `${favicon}`,
    pageTitle: '50 Proyectos JavaScript',
    path: '',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/home.html`,
        layoutFooter: `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: '50 Proyectos JavaScript del curso + de 100 Proyectos HTML, CSS y JS',
    styles: [
        { href: `${styles}/styles-home.css` },
    ],
    scripts: [],
}

