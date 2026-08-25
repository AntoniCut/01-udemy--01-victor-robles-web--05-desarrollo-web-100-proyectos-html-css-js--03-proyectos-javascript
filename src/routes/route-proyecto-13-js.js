/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-13-js.js  --  /src/routes/route-proyecto-13-js.js  -----  *
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
export const routeProyecto13JS = {
    id: 'js13',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 13 JavaScript',
    path: 'proyecto-13-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-13.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-13/proyecto-13-description.html`, target: '[data-component-page="proyecto13Description"]' },
        { url: `${pagesComponents}/proyecto-13/proyecto-13-demo.html`, target: '[data-component-page="proyecto13Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-13-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-13/proyecto-13-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-13`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-13-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-13.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-13`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-13-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-13.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-13`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 13 JavaScript',
    styles: [
        { href: `${styles}/styles-13.css` },
    ],
    scripts: [
        { src: `${scripts}/main-13.js` },
    ],
};
