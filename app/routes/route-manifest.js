/*
    *  -------------------------------------------------------------------  *
    *  -----  /route-manifest.js  --  /src/routes/route-manifest.js  -----  *
    *  -------------------------------------------------------------------  *
*/


/** 
 * - `Manifiesto ligero de rutas: solo id, path y nombre de archivo (sin imports)`
 * - Se usa para lazy loading: el módulo de cada ruta se importa dinámicamente bajo demanda.
 * @type {import("../../types/index.js").RouteManifest[]} 
 */

export const routeManifest = [

    //  ----------  00 - Home  ----------
    { 
        id: 'home', 
        path: '', 
        file: 'route-00-home' 
    },

   

    //  -----  01  -----
    { id: 'js01',        path: 'proyecto-01-js',       file: 'route-proyecto-01-js' },

    //  ----------  02  ----------
    { id: 'js02',        path: 'proyecto-02-js',       file: 'route-proyecto-02-js' },

    //  ----------  03  ----------
    { id: 'js03',        path: 'proyecto-03-js',       file: 'route-proyecto-03-js' },

    //  ----------  04  ----------
    { id: 'js04',        path: 'proyecto-04-js',       file: 'route-proyecto-04-js' },

    //  ----------  05  ----------
    { id: 'js05V1',      path: 'proyecto-05-v1-js',    file: 'route-proyecto-05-v1-js' },
    { id: 'js05V2',      path: 'proyecto-05-v2-js',    file: 'route-proyecto-05-v2-js' },

    //  ----------  07  ----------
    { id: 'js07V1',      path: 'proyecto-07-v1-js',    file: 'route-proyecto-07-v1-js' },
    { id: 'js07V2',      path: 'proyecto-07-v2-js',    file: 'route-proyecto-07-v2-js' },

    //  ----------  08  ----------
    { id: 'js08',        path: 'proyecto-08-js',       file: 'route-proyecto-08-js' },

    //  ----------  09  ----------
    { id: 'js09',        path: 'proyecto-09-js',       file: 'route-proyecto-09-js' },

    //  ----------  10  ----------
    { id: 'js10',        path: 'proyecto-10-js',       file: 'route-proyecto-10-js' },

    //  ----------  11  ----------
    { id: 'js11',        path: 'proyecto-11-js',       file: 'route-proyecto-11-js' },

    //  ----------  12  ----------
    { id: 'js12',        path: 'proyecto-12-js',       file: 'route-proyecto-12-js' },

    //  ----------  13  ----------
    { id: 'js13',        path: 'proyecto-13-js',       file: 'route-proyecto-13-js' },

    //  ----------  14  ----------
    { id: 'js14',        path: 'proyecto-14-js',       file: 'route-proyecto-14-js' },

    //  ----------  15  ----------
    { id: 'js15',        path: 'proyecto-15-js',       file: 'route-proyecto-15-js' },

    //  ----------  16  ----------
    { id: 'js16',        path: 'proyecto-16-js',       file: 'route-proyecto-16-js' },

    //  ----------  17  ----------
    { id: 'js17',        path: 'proyecto-17-js',       file: 'route-proyecto-17-js' },

    //  ----------  18  ----------
    { id: 'js18',        path: 'proyecto-18-js',       file: 'route-proyecto-18-js' },

    //  ----------  19  ----------
    { id: 'js19',        path: 'proyecto-19-js',       file: 'route-proyecto-19-js' },

    //  ----------  20  ----------
    { id: 'js20',        path: 'proyecto-20-js',       file: 'route-proyecto-20-js' },

    //  ----------  21  ----------
    { id: 'js21',        path: 'proyecto-21-js',       file: 'route-proyecto-21-js' },
    { id: 'js21JQueryUI', path: 'proyecto-21-jquery-ui', file: 'route-proyecto-21-jquery-ui' },

    //  ----------  22  ----------
    { id: 'js22',        path: 'proyecto-22-js',       file: 'route-proyecto-22-js' },

    //  ----------  23  ----------
    { id: 'js23',        path: 'proyecto-23-js',       file: 'route-proyecto-23-js' },

    //  ----------  24  ----------
    { id: 'js24',        path: 'proyecto-24-js',       file: 'route-proyecto-24-js' },

    //  ----------  25  ----------
    { id: 'js25',        path: 'proyecto-25-js',       file: 'route-proyecto-25-js' },

    //  ----------  26  ----------
    { id: 'js26',        path: 'proyecto-26-js',       file: 'route-proyecto-26-js' },

    //  ----------  27  ----------
    { id: 'js27',        path: 'proyecto-27-js',       file: 'route-proyecto-27-js' },

    //  ----------  28  ----------
    { id: 'js28',        path: 'proyecto-28-js',       file: 'route-proyecto-28-js' },

    //  ----------  29  ----------
    { id: 'js29',        path: 'proyecto-29-js',       file: 'route-proyecto-29-js' },

    //  ----------  30  ----------
    { id: 'js30',        path: 'proyecto-30-js',       file: 'route-proyecto-30-js' },

    //  ----------  31  ----------
    { id: 'js31',        path: 'proyecto-31-js',       file: 'route-proyecto-31-js' },

    //  ----------  32  ----------
    { id: 'js32',        path: 'proyecto-32-js',       file: 'route-proyecto-32-js' },

    //  ----------  33  ----------
    { id: 'js33',        path: 'proyecto-33-js',       file: 'route-proyecto-33-js' },

    //  ----------  34  ----------
    { id: 'js34',        path: 'proyecto-34-js',       file: 'route-proyecto-34-js' },

    //  ----------  35  ----------
    { id: 'js35',        path: 'proyecto-35-js',       file: 'route-proyecto-35-js' },

    //  ----------  36  ----------
    { id: 'js36',        path: 'proyecto-36-js',       file: 'route-proyecto-36-js' },

    //  ----------  37  ----------
    { id: 'js37',        path: 'proyecto-37-js',       file: 'route-proyecto-37-js' },

    //  ----------  38  ----------
    { id: 'js38',        path: 'proyecto-38-js',       file: 'route-proyecto-38-js' },

    //  ----------  39  ----------
    { id: 'js39',        path: 'proyecto-39-js',       file: 'route-proyecto-39-js' },

    //  ----------  40  ----------
    { id: 'js40',        path: 'proyecto-40-js',       file: 'route-proyecto-40-js' },

    //  ----------  41  ----------
    { id: 'js41',        path: 'proyecto-41-js',       file: 'route-proyecto-41-js' },

    //  ----------  42  ----------
    { id: 'js42',        path: 'proyecto-42-js',       file: 'route-proyecto-42-js' },

    //  ----------  43  ----------
    { id: 'js43',        path: 'proyecto-43-js',       file: 'route-proyecto-43-js' },

    //  ----------  44  ----------
    { id: 'js44',        path: 'proyecto-44-js',       file: 'route-proyecto-44-js' },

    //  ----------  45  ----------
    { id: 'js45',        path: 'proyecto-45-js',       file: 'route-proyecto-45-js' },

    //  ----------  46  ----------
    { id: 'js46',        path: 'proyecto-46-js',       file: 'route-proyecto-46-js' },

    //  ----------  47  ----------
    { id: 'js47',        path: 'proyecto-47-js',       file: 'route-proyecto-47-js' },

    //  ----------  48  ----------
    { id: 'js48',        path: 'proyecto-48-js',       file: 'route-proyecto-48-js' },

    //  ----------  49  ----------
    { id: 'js49',        path: 'proyecto-49-js',       file: 'route-proyecto-49-js' },

    //  ----------  50  ----------
    { id: 'js50',        path: 'proyecto-50-js',       file: 'route-proyecto-50-js' },


    //  ----------  404 - Not Found  ----------
    { 
        id: '404NotFoundPage', 
        path: '404-not-found-page', 
        file: 'route-404-not-found-page' 
    },

];
