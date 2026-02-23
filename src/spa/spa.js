/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/  --------------------------------------
    ----------  /scripts/  ----------------------------------
    ----------  /main-spa.js  -------------------------------
    ---------------------------------------------------------
*/



import { routesProyectosJS } from "../routes/routes-proyectos-js.js";
import { contentLoaderSPA } from "../plugins/content-loader-spa/content-loader-spa.js";


export const spa = () => {

    
    //  ----------  Documento Cargado  ----------
    console.log('\n');
    console.warn('-----  content-loader-spa.js  -----');
       
    
    //  ----------  Arrays con la informacion del contenido a cargar de las rutas del proyecto ----------
    const allRoutes = [
        
        ...routesProyectosJS

    ];

  

    //  ----------  Opciones que le pasamos al plugins  ----------
    const configOptions = {
        routes: allRoutes,
        base: '/01-victor-robles-web/05-desarrollo-web-100-proyectos-html-css-js/03-proyectos-javascript',
        layoutHeader: '#layoutHeader',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        draggable: true
    }


    //  ----------  Invocamos el Plugins  --  content-loader-spa.js  ----------
    contentLoaderSPA(configOptions);

}
