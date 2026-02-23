/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/  --------------------------------------
    ----------  /routes/  -----------------------------------
    ----------  /routes-proyectos-js.js  --------------------
    ---------------------------------------------------------
*/


const paths = {
    urlLayoutHeader: '/01-victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
    urlLayoutNavbar: '/01-victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
    urlLayoutMain: '/01-victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript/src/pages',
    urlLayoutFooter: '/01-victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
    favicon: '/01-victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
    styles: '/01-victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript/src/styles/pages',
    scripts: '/01-victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts'
}

const {urlLayoutHeader, urlLayoutNavbar, urlLayoutMain, urlLayoutFooter, favicon, styles, scripts} = paths;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
export const routesProyectosJS = [


    {
        id: 'home',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/home.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: '50 Proyectos JavaScript',
        path: '/',
        headerTitle: '50 Proyectos JavaScript del curso + de 100 Proyectos HTML, CSS y JS',
        styles: `${styles}/styles-home.css`,
        scripts: ''
    },


    {
        id: 'js01',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-01.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 1 JavaScript',
        path: '/proyecto-01-js/',
        headerTitle: 'Proyecto 1 JavaScript',
        styles: '',
        scripts: [{
            src: `${scripts}/main-01.js`
        }]
    },


    {
        id: 'js02',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-02.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 2 JavaScript',
        path: '/proyecto-02-js/',
        headerTitle: 'Proyecto 2 JavaScript',
        styles: '',
        scripts: [{
            src: `${scripts}/main-02.js`
        }]
    },


    {
        id: 'js03',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-03.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 3 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-03-js/',
        headerTitle: 'Proyecto 3 JavaScript',
        styles: '',
        scripts: [{
            src: `${scripts}/main-03.js`
        }]
    },


    {
        id: 'js04',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-04.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 4 JavaScript',
        path: '/proyecto-04-js/',
        headerTitle: 'Proyecto 4 JavaScript',
        styles: '',
        scripts: [{
            src: `${scripts}/main-04.js`
        }]
    },


    {
        id: 'js05V1',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-05-v1.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 5 Version 1 JavaScript',
        path: '/proyecto-05-v1-js/',
        headerTitle: 'Proyecto 5 Version 1 JavaScript',
        styles: `${styles}/styles-05.css`,
        scripts: [{
            src: `${scripts}/main-05-v1.js`
        }]
    },


    {
        id: 'js05V2',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-05-v2.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 5 Version 2 JavaScript',
        path: '/proyecto-05-v2-js/',
        headerTitle: 'Proyecto 5 Version 2 JavaScript',
        styles: `${styles}/styles-05.css`,
        scripts: [{
            src: `${scripts}/main-05-v2.js`
        }]
    },


    {
        id: 'js07V1',
        urlLayoutHeader: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/pages/proyecto-07-v1.html',
        urlLayoutFooter: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
        favicon: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
        pageTitle: 'Proyecto 7 Version 1 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-07-v1-js/',
        headerTitle: 'Proyecto 7 Version 1 JavaScript',
        styles: '',
        scripts: [{
            src: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts/projects/main-07-v1.js'
        }]
    },


    {
        id: 'js07V2',
        urlLayoutHeader: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/pages/proyecto-07-v2.html',
        urlLayoutFooter: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
        favicon: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
        pageTitle: 'Proyecto 7 Version 2 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-07-v2-js/',
        headerTitle: 'Proyecto 7 Version 2 JavaScript',
        styles: '',
        scripts: [{
            src: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts/projects/main-07-v2.js'
        }]
    },


    {
        id: 'js08',
        urlLayoutHeader: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/pages/proyecto-08.html',
        urlLayoutFooter: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
        favicon: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
        pageTitle: 'Proyecto 8 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-08-js/',
        headerTitle: 'Proyecto 8 JavaScript',
        styles: '',
        scripts: [{
            src: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts/projects/main-08.js'
        }]
    },

    {
        id: 'js09',
        urlLayoutHeader: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/pages/proyecto-09.html',
        urlLayoutFooter: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
        favicon: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
        pageTitle: 'Proyecto 9 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-09-js/',
        headerTitle: 'Proyecto 9 JavaScript',
        styles: '',
        scripts: [{
            src: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts/projects/main-09.js'
        }]
    },

    {
        id: 'js10',
        urlLayoutHeader: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/pages/proyecto-10.html',
        urlLayoutFooter: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
        favicon: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
        pageTitle: 'Proyecto 10 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-10-js/',
        headerTitle: 'Proyecto 10 JavaScript',
        styles: '',
        scripts: [{
            src: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts/projects/main-10.js'
        }]
    },


    {
        id: 'js11',
        urlLayoutHeader: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/pages/proyecto-11.html',
        urlLayoutFooter: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
        favicon: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
        pageTitle: 'Proyecto 11 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-11-js/',
        headerTitle: 'Proyecto 11 JavaScript',
        styles: '',
        scripts: [{
            src: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts/projects/main-11.js'
        }]
    },


    {
        id: 'js12',
        urlLayoutHeader: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/pages/proyecto-12.html',
        urlLayoutFooter: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
        favicon: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
        pageTitle: 'Proyecto 12 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-12-js/',
        headerTitle: 'Proyecto 12 JavaScript',
        styles: '',
        scripts: [{
            src: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts/projects/main-12.js'
        }]
    },


    {
        id: 'js13',
        urlLayoutHeader: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/pages/proyecto-13.html',
        urlLayoutFooter: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
        favicon: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
        pageTitle: 'Proyecto 13 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-13-js/',
        headerTitle: 'Proyecto 13 JavaScript',
        styles: '',
        scripts: [{
            src: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts/projects/main-13.js'
        }]
    },


    {
        id: 'js14',
        urlLayoutHeader: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/pages/proyecto-14.html',
        urlLayoutFooter: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/components-layout/layout-footer.html',
        favicon: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/assets/favicon/javascript-icon.ico',
        pageTitle: 'Proyecto 14 JavaScript',
        path: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/proyecto-14-js/',
        headerTitle: 'Proyecto 14 JavaScript',
        styles: '',
        scripts: [{
            src: '/curso-100-proyectos-html-css-js/03-proyectos-javascript/src/scripts/projects/main-14.js'
        }]
    },


    {
        id: 'js15',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-15.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 15 JavaScript',
        path: '/proyecto-15-js/',
        headerTitle: 'Proyecto 15 JavaScript',
        styles: `${styles}/styles-15.css`,
        scripts: [{
            src: `${scripts}/main-15.js`
        }]
    },

    {
        id: 'js16',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-16.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 16 JavaScript',
        path: '/proyecto-16-js/',
        headerTitle: 'Proyecto 16 JavaScript',
        styles: `${styles}/styles-16.css`,
        scripts: [{
            src: `${scripts}/main-16.js`
        }]
    },


    {
        id: 'js17',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-17.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 17 JavaScript',
        path: '/proyecto-17-js/',
        headerTitle: 'Proyecto 17 JavaScript',
        styles: `${styles}/styles-17.css`,
        scripts: [{
            src: `${scripts}/main-17.js`
        }]
    },


    {
        id: 'js18',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-18.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 18 JavaScript',
        path: '/proyecto-18-js/',
        headerTitle: 'Proyecto 18 JavaScript',
        styles: `${styles}/styles-18.css`,
        scripts: [{
            src: `${scripts}/main-18.js`
        }]
    },


    {
        id: 'js19',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-19.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 19 JavaScript',
        path: '/proyecto-19-js/',
        headerTitle: 'Proyecto 19 JavaScript',
        styles: `${styles}/styles-19.css`,
        scripts: [{
            src: `${scripts}/main-19.js`
        }]
    },


    {
        id: 'js20',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-20.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 20 JavaScript',
        path: '/proyecto-20-js/',
        headerTitle: 'Proyecto 20 JavaScript',
        styles: `${styles}/styles-20.css`,
        scripts: [{
            src: `${scripts}/main-20.js`
        }]
    },


    {
        id: 'js21',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-21.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 21 JavaScript',
        path: '/proyecto-21-js/',
        headerTitle: 'Proyecto 21 JavaScript',
        styles: `${styles}/styles-21.css`,
        scripts: [{
            src: `${scripts}/main-21.js`
        }]
    },


    {
        id: 'js21JQueryUI',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-21-jquery-ui.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 21 jQuery UI',
        path: '/proyecto-21-jquery-ui/',
        headerTitle: 'Proyecto 21 jQuery UI',
        styles: `${styles}/styles-21.css`,
        scripts: [{
            src: `${scripts}/main-21-jquery-ui.js`
        }]
    },


    {
        id: 'js22',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-22.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 22 JavaScript',
        path: '/proyecto-22-js/',
        headerTitle: 'Proyecto 22 JavaScript',
        styles: `${styles}/styles-22.css`,
        scripts: [{
            src: `${scripts}/main-22.js`
        }]
    },


    {
        id: 'js23',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-23.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 23 JavaScript',
        path: '/proyecto-23-js/',
        headerTitle: 'Proyecto 23 JavaScript',
        styles: `${styles}/styles-23.css`,
        scripts: [{
            src: `${scripts}/main-23.js`
        }]
    },


    {
        id: 'js24',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-24.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 24 JavaScript',
        path: '/proyecto-24-js/',
        headerTitle: 'Proyecto 24 JavaScript',
        styles: `${styles}/styles-24.css`,
        scripts: [{
            src: `${scripts}/main-24.js`
        }]
    },


    {
        id: 'js25',
        urlLayoutHeader: urlLayoutHeader,
        urlLayoutNavbar: urlLayoutNavbar,
        urlLayoutMain: `${urlLayoutMain}/proyecto-25.html`,
        urlLayoutFooter: urlLayoutFooter,
        favicon: favicon,
        pageTitle: 'Proyecto 25 JavaScript',
        path: '/proyecto-25-js/',
        headerTitle: 'Proyecto 25 JavaScript',
        styles: `${styles}/styles-25.css`,
        scripts: [{
            src: `${scripts}/main-25.js`
        }]
    },
    



];
