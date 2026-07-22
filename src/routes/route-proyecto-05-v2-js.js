/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-proyecto-05-v2-js.js  --  /src/routes/route-proyecto-05-v2-js.js  -----  *
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
export const routeProyecto05V2JS = {
    id: 'js05V2',
    favicon: `${favicon}`,
    pageTitle: 'Proyecto 5 Version 2 JavaScript',
    path: 'proyecto-05-v2-js',
    components: {
        layoutHeader: `${layoutHeader}`,
        layoutNavbar: `${layoutNavbar}`,
        layoutMain: `${pages}/proyecto-05-v2.html`,
        layoutFooter: `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/proyecto-05-v2/proyecto-05-v2-description.html`, target: '[data-component-page="proyecto05V2Description"]' },
        { url: `${pagesComponents}/proyecto-05-v2/proyecto-05-v2-demo.html`, target: '[data-component-page="proyecto05V2Demo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: 'proyecto-05-v2-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponentsSrc}/proyecto-05-v2/proyecto-05-v2-demo.html`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-05-v2`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: 'main-05-v2-js.html',
            fileExtension: 'js',
            urlInput: `${scriptsSrc}/main-05-v2.js`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-05-v2`,
            target: '[data-shiki="codeJs"]',
        },
        {
            fileName: 'styles-05-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/styles-05.css`,
            urlOutput: `${MarkdownShikiHtml}/proyecto-05-v2`,
            target: '[data-shiki="codeCss"]',
        },
    ],
    headerTitle: 'Proyecto 5 Version 2 JavaScript',
    styles: [
        { href: `${styles}/styles-05.css` },
    ],
    scripts: [
        { src: `${scripts}/main-05-v2.js` },
    ],
};
