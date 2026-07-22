/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-49-js.js  --  /src/routes/route-proyecto-49-js.js  -----  *
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
export const routeProyecto49JS = {
    id: 'js49',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 49 JavaScript',
    path: 'proyecto-49-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-49.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-49/proyecto-49-description.html`, target: '[data-component-page="proyecto49Description"]' },
        { url: `${pagesComponents}/proyecto-49/proyecto-49-demo.html`, target: '[data-component-page="proyecto49Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-49-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-49/proyecto-49-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-49`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-49-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-49.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-49`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-49-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-49.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-49`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 49 JavaScript',
    styles: [
        { href: `${styles}/styles-49.css` },
    ],
    scripts: [
        { src: `${scripts}/main-49.js` },
    ],
};
