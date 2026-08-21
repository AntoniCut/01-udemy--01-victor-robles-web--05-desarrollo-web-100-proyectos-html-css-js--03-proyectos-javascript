/*
    *  -----------------------------------------------------------  *
    *  -----  main-46.js  --  /src/scripts/pages/main-46.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 46 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del dispositivo móvil` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__mobile-device")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {NodeListOf<HTMLArticleElement>} - `pantallas del dispositivo` */
    const $pages = /** @type {NodeListOf<HTMLArticleElement>} */ (
        $demo.querySelectorAll(".mobile-device__page")
    );

    /** @type {NodeListOf<HTMLLIElement>} - `elementos de la barra de navegación` */
    const $navItems = /** @type {NodeListOf<HTMLLIElement>} */ (
        $demo.querySelectorAll(".mobile-device__item")
    );

    /** @type {NodeListOf<HTMLAnchorElement>} - `enlaces de redes sociales` */
    const $socialLinks = /** @type {NodeListOf<HTMLAnchorElement>} */ (
        $demo.querySelectorAll(".mobile-device__social")
    );


    //  -----  verificación de pantallas y navegación  -----
    if ($pages.length === 0 || $navItems.length === 0 || $pages.length !== $navItems.length) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * -------------------------------------
     * -----  `desactivarPantallas()`  -----
     * -------------------------------------
     * - Quita el estado activo de todas las pantallas y de la navegación.
     * @return {void}
     */
    const desactivarPantallas = () => {

        $pages.forEach((page) => {
            page.classList.remove("mobile-device__page--active");
        });

        $navItems.forEach((navItem) => {
            navItem.classList.remove("mobile-device__item--active");
        });
    };


    /**
     * --------------------------------------
     * -----  `activarPantalla(index)`  -----
     * --------------------------------------
     * - Marca la pantalla y el botón de navegación que corresponden al índice.
     * @param {number} index - Índice de la pantalla a mostrar.
     * @return {void}
     */
    const activarPantalla = (index) => {
        $navItems[index].classList.add("mobile-device__item--active");
        $pages[index].classList.add("mobile-device__page--active");
    };


    //  -----  pantalla inicial  -----
    desactivarPantallas();
    activarPantalla(0);


    //  -----  click en la navegación  -----
    $navItems.forEach((navItem, index) => {

        /** @type {HTMLButtonElement | null} - `botón de la pantalla` */
        const $link = /** @type {HTMLButtonElement | null} */ (
            navItem.querySelector(".mobile-device__link")
        );

        //  -----  si el ítem no tiene botón, no continuar  -----
        if (!$link) {
            return;
        }

        $link.addEventListener("click", (event) => {
            event.preventDefault();
            desactivarPantallas();
            activarPantalla(index);
        });
    });


    //  -----  click en redes sociales  -----
    $socialLinks.forEach(($social) => {

        $social.addEventListener("click", (event) => {
            event.preventDefault();
        });
    });

    
})();
