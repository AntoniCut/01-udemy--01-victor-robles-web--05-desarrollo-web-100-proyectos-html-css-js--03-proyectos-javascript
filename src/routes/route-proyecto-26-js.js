/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-26-js.js  --  /src/routes/route-proyecto-26-js.js  -----  *
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
export const routeProyecto26JS = {
    id: 'js26',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 26 JavaScript',
    path: 'proyecto-26-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-26.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-26/proyecto-26-description.html`, target: '[data-component-page="proyecto26Description"]' },
        { url: `${pagesComponents}/proyecto-26/proyecto-26-demo.html`, target: '[data-component-page="proyecto26Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-26-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-26/proyecto-26-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-26`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-26-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-26.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-26`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-26-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-26.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-26`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 26 JavaScript',
    styles: [
        { href: `${styles}/styles-26.css` },
    ],
    scripts: [
        { src: `${scripts}/main-26.js` },
    ],
};
