/*
    *  -----------------------------------------------------------  *
    *  -----  main-37.js  --  /src/scripts/pages/main-37.js  -----  *
    *  -----------------------------------------------------------  *
*/

(() => {


    console.log("\n");
    console.warn("-----  Proyecto 37 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del menú` */
    const $menuDemo = document.querySelector(".demo__menu");

    /** @type {HTMLButtonElement | null} - `Botón para abrir y cerrar el menú` */
    const $btn = $menuDemo ? $menuDemo.querySelector(".menu__btn") : null;

    /** @type {HTMLElement | null} - `Icono del botón` */
    const $icon = $btn ? $btn.querySelector(".menu__icon") : null;

    /** @type {HTMLUListElement | null} - `Lista circular de iconos` */
    const $list = $menuDemo ? $menuDemo.querySelector(".menu__list") : null;


    //  -----  verificación de elementos  -----
    if (!$menuDemo || !$btn || !$icon || !$list) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * ------------------------------
     * -----  `alternarMenu()`  -----
     * ------------------------------
     * - Abre o cierra el menú circular y cambia el icono del botón.
     * @return {void}
     */
    const alternarMenu = () => {

        $list.classList.toggle("menu__list--open");

        /** - `indica si el menú está abierto` */
        const abierto = $list.classList.contains("menu__list--open");

        //  -----  cambiar icono abrir / cerrar  -----
        if (abierto) {
            $icon.classList.remove("fa-plus");
            $icon.classList.add("fa-xmark");
        }
        else {
            $icon.classList.remove("fa-xmark");
            $icon.classList.add("fa-plus");
        }

        $btn.setAttribute("aria-expanded", abierto ? "true" : "false");
        $btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    };


    //  -----  pulsar botón del menú  -----
    $btn.addEventListener("click", (event) => {
        event.preventDefault();
        alternarMenu();
    });


})();
