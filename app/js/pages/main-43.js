/*
    *  -----------------------------------------------------------  *
    *  -----  main-43.js  --  /src/scripts/pages/main-43.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 43 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del menú circular` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__circular-menu")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLNavElement | null} - `navegación circular` */
    const $nav = /** @type {HTMLNavElement | null} */ (
        $demo.querySelector(".circular-menu__nav")
    );

    /** @type {HTMLButtonElement | null} - `botón para abrir y cerrar el menú` */
    const $btn = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".circular-menu__btn")
    );

    /** @type {NodeListOf<HTMLAnchorElement>} - `enlaces del menú` */
    const $links = $demo.querySelectorAll(".circular-menu__link");


    //  -----  verificación del menú  -----
    if (!$nav || !$btn) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * ------------------------------
     * -----  `alternarMenu()`  -----
     * ------------------------------
     * - Abre o cierra el overlay circular y actualiza el estado accesible del botón.
     * @return {void}
     */
    const alternarMenu = () => {

        $nav.classList.toggle("circular-menu__nav--show");

        /** - `indica si el menú está abierto` */
        const abierto = $nav.classList.contains("circular-menu__nav--show");

        $btn.setAttribute("aria-expanded", abierto ? "true" : "false");
        $btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");

    };


    //  -----  pulsar el botón del menú  -----
    $btn.addEventListener("click", (event) => {
        event.preventDefault();
        alternarMenu();
    });


    //  -----  evitar que los enlaces recarguen o salten la página  -----
    $links.forEach(($link) => {
        $link.addEventListener("click", (event) => {
            event.preventDefault();
        });
    });


})();
