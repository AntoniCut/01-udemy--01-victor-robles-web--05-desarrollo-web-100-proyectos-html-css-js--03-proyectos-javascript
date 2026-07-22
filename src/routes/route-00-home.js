/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-00-home.js  --  /src/routes/route-00-home.js  -----  *
    *  -----------------------------------------------------------------  *
*/


import { paths } from './paths.js';

const {
    favicon,
    layoutHeader,
    layoutNavbar,
    pages,
    pagesComponents,
    MarkdownShikiHtml,
    layoutFooter,
    styles,
    pluginsSource,
} = paths;


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
    pagesComponents: [
        { url: `${pagesComponents}/home-description.html`, target: '[data-component-page="homeDescription"]' },
        { url: `${pagesComponents}/home-demo.html`, target: '[data-component-page="homeDemo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'spa-loader-content-html-js.html',
            fileExtension: 'js',
            urlInput: `${pluginsSource}/spa-loader-content-html/v4/spa-loader-content-html.js`,
            urlOutput: `${MarkdownShikiHtml}/plugins/v4`,
            target: '[data-shiki="pluginV4"]',
        },
    ],
    headerTitle: '50 Proyectos JavaScript del curso + de 100 Proyectos HTML, CSS y JS',
    styles: [
        { href: `${styles}/styles-home.css` },
    ],
    scripts: [],
};
