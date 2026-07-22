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
    pagesComponents,
    pagesComponentsSrc,
    MarkdownShikiHtml,
    layoutFooter,
    styles,
    scripts,
    scriptsSrc,
} = paths;


/** @type {import("../../types/index.js").Route} */
export const routeProyecto21JS = {
    id: 'js21',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 21 JavaScript',
    path: 'proyecto-21-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-21.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-21/proyecto-21-description.html`, target: '[data-component-page="proyecto21Description"]' },
        { url: `${pagesComponents}/proyecto-21/proyecto-21-demo.html`, target: '[data-component-page="proyecto21Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-21-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-21/proyecto-21-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-21`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-21-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-21.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-21`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-21-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-21.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-21`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 21 JavaScript',
    styles: [
        { href: `${styles}/styles-21.css` },
    ],
    scripts: [
        { src: `${scripts}/main-21.js` },
    ],
};
