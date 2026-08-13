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

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de artículos` */
    const $articles = document.querySelector(".demo__articles");

    /** @type {HTMLArticleElement | null} - `Articulo del lado izquierdo` */
    const $articleLeft = $articles ? $articles.querySelector(".articles__article--left") : null;

    /** @type {HTMLArticleElement | null} - `Articulo del lado derecho` */
    const $articleRight = $articles ? $articles.querySelector(".articles__article--right") : null;


    //  -----  verificación de elementos  -----
    if (!$articles || !$articleLeft || !$articleRight) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    //  -----  cuando el mouse entre en el artículo izquierdo  -----
    $articleLeft.addEventListener("mouseenter", () => {
        $articleLeft.classList.add("articles__article--active");
        $articleRight.classList.add("articles__article--inactive");
    });


    //  -----  cuando el mouse salga del artículo izquierdo  -----
    $articleLeft.addEventListener("mouseleave", () => {
        $articleLeft.classList.remove("articles__article--active");
        $articleRight.classList.remove("articles__article--inactive");
    });


    //  -----  cuando el mouse entre en el artículo derecho  -----
    $articleRight.addEventListener("mouseenter", () => {
        $articleRight.classList.add("articles__article--active");
        $articleLeft.classList.add("articles__article--inactive");
    });


    //  -----  cuando el mouse salga del artículo derecho  -----
    $articleRight.addEventListener("mouseleave", () => {
        $articleRight.classList.remove("articles__article--active");
        $articleLeft.classList.remove("articles__article--inactive");
    });


})();
