/*
    *  -----------------------------------------------------------  *
    *  -----  main-39.js  --  /src/scripts/pages/main-39.js  -----  *
    *  -----------------------------------------------------------  *
*/

(() => {


    console.log("\n");
    console.warn("-----  Proyecto 39 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de navbar fija` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__sticky-nav")
    );


    //  -----  verificación de elementos  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLNavElement | null} - `Barra de navegación` */
    const $nav = /** @type {HTMLNavElement | null} */ (
        $demo.querySelector(".sticky-nav__nav")
    );

    /** @type {NodeListOf<HTMLAnchorElement>} - `Enlaces de la navbar` */
    const $links = $demo.querySelectorAll(".sticky-nav__link");


    //  -----  verificación de la navbar  -----
    if (!$nav) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** - `px de scroll dentro de la demo para fijar la navbar` */
    const UMBRAL_SCROLL = 200;


    /**
     * ----------------------------------
     * -----  `actualizarNavbar()`  -----
     * ----------------------------------
     * - Fija la navbar al superar 200px de scroll dentro de la demo.
     * @return {void}
     */
    const actualizarNavbar = () => {

        /** @type {boolean} - `el scroll de la demo superó el umbral` */
        const debeFijarse = $demo.scrollTop > UMBRAL_SCROLL;

        /** @type {boolean} - `la navbar ya está fija` */
        const estaFija = $nav.classList.contains("sticky-nav__nav--fixed");


        //  -----  si el contenedor superó 200px, fijar la navbar  -----
        if (debeFijarse && !estaFija) {
            $nav.classList.add("sticky-nav__nav--fixed");
        }
        //  -----  si el scroll vuelve atrás, dejar la navbar en flujo  -----
        else if (!debeFijarse && estaFija) {
            $nav.classList.remove("sticky-nav__nav--fixed");
        }
    };


    /**
     * ---------------------------------
     * -----  `vincularEnlaces()`  -----
     * ---------------------------------
     * - Evita que los enlaces de la demo salten al inicio de la página.
     * @return {void}
     */
    const vincularEnlaces = () => {

        $links.forEach(($link) => {

            //  -----  click en enlace de la navbar  -----
            $link.addEventListener("click", (event) => {
                event.preventDefault();
            });
        });
    };


    /**
     * -----------------------------
     * -----  `iniciarDemo()`  -----
     * -----------------------------
     * - Enlaza el scroll del contenedor de la demo y deja la navbar al día.
     * @return {void}
     */
    const iniciarDemo = () => {

        vincularEnlaces();

        //  -----  scroll del contenedor de la demo  -----
        $demo.addEventListener("scroll", actualizarNavbar);

        actualizarNavbar();
    };


    //  -----  al iniciar la aplicación  -----
    iniciarDemo();


})();
