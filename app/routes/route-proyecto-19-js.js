/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-19-js.js  --  /src/routes/route-proyecto-19-js.js  -----  *
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
export const routeProyecto19JS = {
    id: 'js19',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 19 JavaScript',
    path: 'proyecto-19-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-19.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-19/proyecto-19-description.html`, target: '[data-component-page="proyecto19Description"]' },
        { url: `${pagesComponents}/proyecto-19/proyecto-19-demo.html`, target: '[data-component-page="proyecto19Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-19-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-19/proyecto-19-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-19`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-19-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-19.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-19`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-19-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-19.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-19`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 19 JavaScript',
    styles: [
        { href: `${styles}/styles-19.css` },
    ],
    scripts: [
        { src: `${scripts}/main-19.js` },
    ],
};
