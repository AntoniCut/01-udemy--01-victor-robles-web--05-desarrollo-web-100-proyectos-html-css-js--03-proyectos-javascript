/*
    *  -----------------------------------------------------------  *
    *  -----  main-16.js  --  /src/scripts/pages/main-16.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 16 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del viewport` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__viewport")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLElement | null} - `anchura del navegador` */
    const $browserWidth = $demo.querySelector(".viewport__browser-width");

    /** @type {HTMLElement | null} - `altura del navegador` */
    const $browserHeight = $demo.querySelector(".viewport__browser-height");

    /** @type {HTMLElement | null} - `URL del navegador` */
    const $browserUrl = $demo.querySelector(".viewport__browser-url");

    /** @type {HTMLElement | null} - `anchura de la ventana` */
    const $windowWidth = $demo.querySelector(".viewport__window-width");

    /** @type {HTMLElement | null} - `altura de la ventana` */
    const $windowHeight = $demo.querySelector(".viewport__window-height");

    /** @type {HTMLElement | null} - `URL de la ventana` */
    const $windowUrl = $demo.querySelector(".viewport__window-url");


    //  -----  verificación de bloques  -----
    if (
        !$browserWidth ||
        !$browserHeight ||
        !$browserUrl ||
        !$windowWidth ||
        !$windowHeight ||
        !$windowUrl
    ) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * -------------------------------
     * -----  `actualizarInfo()`  -----
     * -------------------------------
     * - Actualiza la información del navegador y de la ventana.
     * @return {void}
     */
    const actualizarInfo = () => {

        const url = window.location.href;

        $browserWidth.textContent = `${screen.width} px`;
        $browserHeight.textContent = `${screen.height} px`;
        $browserUrl.textContent = url;
        $windowWidth.textContent = `${window.innerWidth} px`;
        $windowHeight.textContent = `${window.innerHeight} px`;
        $windowUrl.textContent = url;
    };


    /**
     * ----------------------------------
     * -----  `abrirRutaExterna()`  -----
     * ----------------------------------
     * - Abre la ruta solicitada en una nueva pestaña.
     * @return {void}
     */
    const abrirRutaExterna = () => {

        window.open("https://victorroblesweb.es/ruta", "_blank", "noopener,noreferrer");
    };


    actualizarInfo();
    window.addEventListener("resize", actualizarInfo);
    setTimeout(abrirRutaExterna, 3000);


})();
