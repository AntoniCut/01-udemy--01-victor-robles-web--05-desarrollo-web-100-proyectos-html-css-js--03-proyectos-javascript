/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-24-js.js  --  /src/routes/route-proyecto-24-js.js  -----  *
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
export const routeProyecto24JS = {
    id: 'js24',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 24 JavaScript',
    path: 'proyecto-24-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-24.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-24/proyecto-24-description.html`, target: '[data-component-page="proyecto24Description"]' },
        { url: `${pagesComponents}/proyecto-24/proyecto-24-demo.html`, target: '[data-component-page="proyecto24Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-24-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-24/proyecto-24-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-24`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-24-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-24.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-24`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-24-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-24.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-24`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 24 JavaScript',
    styles: [
        { href: `${styles}/styles-24.css` },
    ],
    scripts: [
        { src: `${scripts}/main-24.js` },
    ],
};
