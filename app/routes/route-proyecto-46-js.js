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
    pagesComponents,
    pagesComponentsSrc,
    MarkdownShikiHtml,
    layoutFooter,
    styles,
    scripts,
    scriptsSrc,
} = paths;


/** @type {import("../../types/index.js").Route} */
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
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-46/proyecto-46-description.html`, target: '[data-component-page="proyecto46Description"]' },
        { url: `${pagesComponents}/proyecto-46/proyecto-46-demo.html`, target: '[data-component-page="proyecto46Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-46-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-46/proyecto-46-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-46`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-46-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-46.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-46`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-46-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-46.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-46`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 46 JavaScript',
    styles: [
        { href: `${styles}/styles-46.css` },
    ],
    scripts: [
        { src: `${scripts}/main-46.js` },
    ],
};
