/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-47-js.js  --  /src/routes/route-proyecto-47-js.js  -----  *
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
export const routeProyecto47JS = {
    id: 'js47',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 47 JavaScript',
    path: 'proyecto-47-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-47.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-47/proyecto-47-description.html`, target: '[data-component-page="proyecto47Description"]' },
        { url: `${pagesComponents}/proyecto-47/proyecto-47-demo.html`, target: '[data-component-page="proyecto47Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-47-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-47/proyecto-47-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-47`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-47-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-47.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-47`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-47-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-47.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-47`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 47 JavaScript',
    styles: [
        { href: `${styles}/styles-47.css` },
    ],
    scripts: [
        { src: `${scripts}/main-47.js` },
    ],
};
