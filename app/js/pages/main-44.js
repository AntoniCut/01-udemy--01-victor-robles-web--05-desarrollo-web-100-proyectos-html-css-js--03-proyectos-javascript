/*
    *  -----------------------------------------------------------  *
    *  -----  main-44.js  --  /src/scripts/pages/main-44.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 44 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de la galería` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__gallery")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLDivElement | null} - `capa de la imagen ampliada` */
    const $selection = /** @type {HTMLDivElement | null} */ (
        $demo.querySelector(".gallery__selection")
    );

    /** @type {HTMLButtonElement | null} - `botón para cerrar la imagen ampliada` */
    const $close = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".gallery__close")
    );

    /** @type {HTMLImageElement | null} - `imagen mostrada en la capa ampliada` */
    const $imageSelected = /** @type {HTMLImageElement | null} */ (
        $demo.querySelector(".gallery__selected")
    );

    /** @type {NodeListOf<HTMLFigureElement>} - `miniaturas de la galería` */
    const $images = $demo.querySelectorAll(".gallery__image");


    //  -----  verificación de la galería  -----
    if (!$selection || !$close || !$imageSelected || $images.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * ----------------------------------------
     * -----  `mostrarSeleccion($image)`  -----
     * ----------------------------------------
     * - Copia la miniatura pulsada a la capa ampliada y la muestra.
     * @param {HTMLFigureElement} $image - Miniatura pulsada.
     * @return {void}
     */
    const mostrarSeleccion = ($image) => {

        /** @type {HTMLImageElement | null} - `imagen de la miniatura` */
        const $item = /** @type {HTMLImageElement | null} */ (
            $image.querySelector(".gallery__item")
        );

        //  -----  si no hay imagen en la miniatura, no continuar  -----
        if (!$item) {
            return;
        }

        $imageSelected.src = $item.src;
        $imageSelected.alt = $item.alt;
        $selection.classList.add("gallery__selection--show");

    };


    /**
     * ----------------------------------
     * -----  `ocultarSeleccion()`  -----
     * ----------------------------------
     * - Oculta la capa de la imagen ampliada.
     * @return {void}
     */
    const ocultarSeleccion = () => {
        $selection.classList.remove("gallery__selection--show");
    };


    //  -----  pulsar una miniatura  -----
    $images.forEach(($image) => {

        $image.addEventListener("click", (event) => {
            event.preventDefault();
            mostrarSeleccion($image);
        });

    });


    //  -----  pulsar el botón de cierre  -----
    $close.addEventListener("click", (event) => {
        event.preventDefault();
        ocultarSeleccion();
    });


})();
