/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-50-js.js  --  /src/routes/route-proyecto-50-js.js  -----  *
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
export const routeProyecto50JS = {
    id: 'js50',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 50 JavaScript',
    path: 'proyecto-50-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-50.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-50/proyecto-50-description.html`, target: '[data-component-page="proyecto50Description"]' },
        { url: `${pagesComponents}/proyecto-50/proyecto-50-demo.html`, target: '[data-component-page="proyecto50Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-50-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-50/proyecto-50-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-50`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-50-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-50.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-50`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-50-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-50.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-50`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 50 JavaScript',
    styles: [
        { href: `${styles}/styles-50.css` },
    ],
    scripts: [
        { src: `${scripts}/main-50.js` },
    ],
};
