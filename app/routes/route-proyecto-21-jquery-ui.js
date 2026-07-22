/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-21-jquery-ui.js  --  /src/routes/route-proyecto-21-jquery-ui.js  -----  *
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
export const routeProyecto21JQueryUI = {
    id: 'js21JQueryUI',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 21 jQuery UI',
    path: 'proyecto-21-jquery-ui',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-21-jquery-ui.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-21-jquery-ui/proyecto-21-jquery-ui-description.html`, target: '[data-component-page="proyecto21JqueryUiDescription"]' },
        { url: `${pagesComponents}/proyecto-21-jquery-ui/proyecto-21-jquery-ui-demo.html`, target: '[data-component-page="proyecto21JqueryUiDemo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-21-jquery-ui-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-21-jquery-ui/proyecto-21-jquery-ui-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-21-jquery-ui`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-21-jquery-ui-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-21-jquery-ui.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-21-jquery-ui`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-21-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-21.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-21-jquery-ui`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 21 jQuery UI',
    styles: [
        { href: `${styles}/styles-21.css` },
    ],
    scripts: [
        { src: `${scripts}/main-21-jquery-ui.js` },
    ],
};
