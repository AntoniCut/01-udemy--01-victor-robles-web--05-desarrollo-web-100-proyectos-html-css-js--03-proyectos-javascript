/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-09-js.js  --  /src/routes/route-proyecto-09-js.js  -----  *
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
export const routeProyecto09JS = {
    id: 'js09',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 9 JavaScript',
    path: 'proyecto-09-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-09.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-09/proyecto-09-description.html`, target: '[data-component-page="proyecto09Description"]' },
        { url: `${pagesComponents}/proyecto-09/proyecto-09-demo.html`, target: '[data-component-page="proyecto09Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-09-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-09/proyecto-09-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-09`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-09-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-09.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-09`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-09-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-09.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-09`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 9 JavaScript',
    styles: [
        { href: `${styles}/styles-09.css` },
    ],
    scripts: [
        { src: `${scripts}/main-09.js` },
    ],
};
