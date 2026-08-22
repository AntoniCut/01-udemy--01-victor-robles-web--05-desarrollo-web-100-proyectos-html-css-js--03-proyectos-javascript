/*
    *  -----------------------------------------------------------  *
    *  -----  main-47.js  --  /src/scripts/pages/main-47.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 47 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de perspectiva 3D` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__perspective")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLButtonElement | null} - `botón para abrir y cerrar el menú` */
    const $btn = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".perspective__btn")
    );

    /** @type {HTMLDivElement | null} - `contenedor de las páginas` */
    const $pagesBox = /** @type {HTMLDivElement | null} */ (
        $demo.querySelector(".perspective__pages")
    );

    /** @type {HTMLUListElement | null} - `lista del menú` */
    const $listBox = /** @type {HTMLUListElement | null} */ (
        $demo.querySelector(".perspective__list")
    );

    /** @type {NodeListOf<HTMLLIElement>} - `elementos del menú` */
    const $listItems = /** @type {NodeListOf<HTMLLIElement>} */ (
        $demo.querySelectorAll(".perspective__item")
    );

    /** @type {NodeListOf<HTMLArticleElement>} - `páginas de contenido` */
    const $pages = /** @type {NodeListOf<HTMLArticleElement>} */ (
        $demo.querySelectorAll(".perspective__page")
    );


    //  -----  verificación de menú y páginas  -----
    if (
        !$btn ||
        !$pagesBox ||
        !$listBox ||
        $listItems.length === 0 ||
        $pages.length === 0 ||
        $listItems.length !== $pages.length
    ) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * ------------------------------------
     * -----  `activarPagina(index)`  -----
     * ------------------------------------
     * - Muestra la página que corresponde al índice del menú.
     * @param {number} index - Índice de la página a activar.
     * @return {void}
     */
    const activarPagina = (index) => {

        $pages.forEach((page) => {
            page.classList.remove("perspective__page--active");
        });

        $pages[index].classList.add("perspective__page--active");
    };


    /**
     * ------------------------------------
     * -----  `actualizarAriaMenu()`  -----
     * ------------------------------------
     * - Sincroniza el estado accesible del botón con la visibilidad del menú.
     * @return {void}
     */
    const actualizarAriaMenu = () => {

        /** - `indica si el menú está visible` */
        const abierto = $listBox.classList.contains("perspective__list--show");

        $btn.setAttribute("aria-expanded", abierto ? "true" : "false");
        $btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    };


    //  -----  estado inicial del botón  -----
    actualizarAriaMenu();


    //  -----  click en el botón del menú  -----
    $btn.addEventListener("click", (event) => {
        
        event.preventDefault();

        $btn.classList.toggle("perspective__btn--active");
        $pagesBox.classList.toggle("perspective__pages--show");
        $listBox.classList.toggle("perspective__list--show");
        
        actualizarAriaMenu();

    });

    

    //  -----  click en las opciones del menú  -----
    $listItems.forEach((item, index) => {

        /** @type {HTMLButtonElement | null} - `botón de la opción del menú` */
        const $link = /** @type {HTMLButtonElement | null} */ (
            item.querySelector(".perspective__link")
        );

        //  -----  si el ítem no tiene botón, no continuar  -----
        if (!$link) {
            return;
        }

        $link.addEventListener("click", (event) => {
            event.preventDefault();
            activarPagina(index);
        });
    });


})();
