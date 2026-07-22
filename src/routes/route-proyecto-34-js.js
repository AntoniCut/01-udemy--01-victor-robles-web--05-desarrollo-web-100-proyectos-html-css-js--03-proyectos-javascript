/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-34-js.js  --  /src/routes/route-proyecto-34-js.js  -----  *
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
export const routeProyecto34JS = {
    id: 'js34',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 34 JavaScript',
    path: 'proyecto-34-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-34.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-34/proyecto-34-description.html`, target: '[data-component-page="proyecto34Description"]' },
        { url: `${pagesComponents}/proyecto-34/proyecto-34-demo.html`, target: '[data-component-page="proyecto34Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-34-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-34/proyecto-34-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-34`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-34-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-34.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-34`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-34-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-34.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-34`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 34 JavaScript',
    styles: [
        { href: `${styles}/styles-34.css` },
    ],
    scripts: [
        { src: `${scripts}/main-34.js` },
    ],
};
