/*
    *  -----------------------------------------------------------  *
    *  -----  main-17.js  --  /src/scripts/pages/main-17.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 17 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de tarjetas` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__tarjetas-estilos")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {NodeListOf<HTMLArticleElement>} - `tarjetas de la demo` */
    const $cards = /** @type {NodeListOf<HTMLArticleElement>} */ (
        $demo.querySelectorAll(".tarjetas-estilos__card")
    );


    /**
     * -----------------------------------------
     * -----  `alternarEstilos(card)`  -----
     * -----------------------------------------
     * - Alterna los estilos visuales de una tarjeta.
     * @param {HTMLArticleElement} card - Tarjeta que cambiará de estilo.
     * @return {void}
     */
    const alternarEstilos = (card) => {

        /** @type {HTMLButtonElement | null} - `botón de estilos` */
        const $button = /** @type {HTMLButtonElement | null} */ (
            card.querySelector(".tarjetas-estilos__style-button")
        );

        /** @type {HTMLHeaderElement | null} - `cabecera de la tarjeta` */
        const $header = /** @type {HTMLHeaderElement | null} */ (
            card.querySelector(".tarjetas-estilos__card-header")
        );

        /** @type {HTMLParagraphElement | null} - `descripción de la tarjeta` */
        const $description = /** @type {HTMLParagraphElement | null} */ (
            card.querySelector(".tarjetas-estilos__description")
        );


        if (!$button || !$header || !$description) {
            return;
        }


        const isActive = card.classList.toggle("tarjetas-estilos__card--active");

        $header.classList.toggle("tarjetas-estilos__card-header--active", isActive);
        $description.classList.toggle("tarjetas-estilos__description--active", isActive);
        $button.classList.toggle("tarjetas-estilos__style-button--active", isActive);
        $button.textContent = isActive ? "Estilos iniciales" : "Cambiar estilos";
    };


    /**
     * --------------------------------------
     * -----  `configurarTarjeta(card)`  -----
     * --------------------------------------
     * - Configura el botón de cambio de estilos.
     * @param {HTMLArticleElement} card - Tarjeta que se configurará.
     * @return {void}
     */
    const configurarTarjeta = (card) => {

        /** @type {HTMLButtonElement | null} - `botón de estilos` */
        const $button = /** @type {HTMLButtonElement | null} */ (
            card.querySelector(".tarjetas-estilos__style-button")
        );


        if (!$button) {
            return;
        }


        $button.addEventListener("click", () => {
            alternarEstilos(card);
        });
    };


    $cards.forEach((card) => {
        configurarTarjeta(card);
    });


})();
