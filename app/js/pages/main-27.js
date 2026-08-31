/*
    *  -----------------------------------------------------------  *
    *  -----  main-27.js  --  /src/scripts/pages/main-27.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 27 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `demo de artículos expandibles` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__articles")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo de artículos.");
    }


    /** @type {HTMLElement | null} - `artículo del lado izquierdo` */
    const $articleLeft = /** @type {HTMLElement | null} */ (
        $demo.querySelector(".articles__article--left")
    );

    /** @type {HTMLElement | null} - `artículo del lado derecho` */
    const $articleRight = /** @type {HTMLElement | null} */ (
        $demo.querySelector(".articles__article--right")
    );


    //  -----  validamos que existan los artículos  -----
    if (!$articleLeft || !$articleRight) {
        throw new Error("No se han encontrado los artículos en el HTML.");
    }


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * ------------------------------------------
     * -----  `activarArticulo(articulo)`  -----
     * ------------------------------------------
     * - Expande el artículo activo y reduce el otro.
     * @param {HTMLElement} articulo - Artículo sobre el que está el ratón.
     * @return {void}
     */
    const activarArticulo = (articulo) => {

        //  -----  activamos el artículo izquierdo  -----
        if (articulo === $articleLeft) {
            $articleLeft.classList.add("articles__article--active");
            $articleRight.classList.add("articles__article--inactive");
            return;
        }

        //  -----  activamos el artículo derecho  -----
        $articleRight.classList.add("articles__article--active");
        $articleLeft.classList.add("articles__article--inactive");
    };


    /**
     * -----------------------------------
     * -----  `restaurarArticulos()`  -----
     * -----------------------------------
     * - Vuelve ambos artículos a su estado inicial.
     * @return {void}
     */
    const restaurarArticulos = () => {
        $articleLeft.classList.remove("articles__article--active", "articles__article--inactive");
        $articleRight.classList.remove("articles__article--active", "articles__article--inactive");
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  ratón sobre el artículo izquierdo  -----
    $articleLeft.addEventListener("mouseenter", () => {
        activarArticulo($articleLeft);
    });


    //  -----  ratón fuera del artículo izquierdo  -----
    $articleLeft.addEventListener("mouseleave", () => {
        restaurarArticulos();
    });


    //  -----  ratón sobre el artículo derecho  -----
    $articleRight.addEventListener("mouseenter", () => {
        activarArticulo($articleRight);
    });


    //  -----  ratón fuera del artículo derecho  -----
    $articleRight.addEventListener("mouseleave", () => {
        restaurarArticulos();
    });


})();
