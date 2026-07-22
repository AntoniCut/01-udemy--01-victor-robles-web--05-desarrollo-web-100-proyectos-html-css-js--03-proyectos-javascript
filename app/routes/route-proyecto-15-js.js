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
    pagesComponents,
    pagesComponentsSrc,
    MarkdownShikiHtml,
    layoutFooter,
    styles,
    scripts,
    scriptsSrc,
} = paths;


/** @type {import("../../types/index.js").Route} */
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
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-15/proyecto-15-description.html`, target: '[data-component-page="proyecto15Description"]' },
        { url: `${pagesComponents}/proyecto-15/proyecto-15-demo.html`, target: '[data-component-page="proyecto15Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-15-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-15/proyecto-15-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-15`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-15-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-15.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-15`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-15-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-15.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-15`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 15 JavaScript',
    styles: [
        { href: `${styles}/styles-15.css` },
    ],
    scripts: [
        { src: `${scripts}/main-15.js` },
    ],
};
