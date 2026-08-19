/*
    *  -----------------------------------------------------------  *
    *  -----  main-41.js  --  /src/scripts/pages/main-41.js  -----  *
    *  -----------------------------------------------------------  *
*/

(() => {


    console.log("\n");
    console.warn("-----  Proyecto 41 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de noticias` */
    const $newsDemo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__news")
    );


    //  -----  verificación de elementos  -----
    if (!$newsDemo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {NodeListOf<HTMLArticleElement>} - `artículos de la lista` */
    const $articles = $newsDemo.querySelectorAll(".news__article");


    //  -----  verificación de los artículos  -----
    if ($articles.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * ----------------------------------
     * -----  `mostrarArticulos()`  -----
     * ----------------------------------
     * - Muestra los artículos que entran en el área visible de la demo.
     * @return {void}
     */
    const mostrarArticulos = () => {

        /** @type {number} - `borde inferior visible de la demo` */
        const limiteVisible = $newsDemo.getBoundingClientRect().bottom;

        $articles.forEach(($article) => {

            /** @type {number} - `posición superior del artículo respecto al viewport` */
            const posicionArticulo = $article.getBoundingClientRect().top;

            //  -----  si el artículo entra en el área visible, mostrarlo  -----
            if (posicionArticulo < limiteVisible) {
                $article.classList.add("news__article--show");
            }
            //  -----  si el artículo queda fuera, ocultarlo  -----
            else {
                $article.classList.remove("news__article--show");
            }
        });
    };


    /**
     * -----------------------------
     * -----  `iniciarDemo()`  -----
     * -----------------------------
     * - Enlaza el scroll de la demo y muestra los artículos visibles al cargar.
     * @return {void}
     */
    const iniciarDemo = () => {

        //  -----  scroll del contenedor de la demo  -----
        $newsDemo.addEventListener("scroll", mostrarArticulos);

        mostrarArticulos();
    };


    //  -----  al iniciar la aplicación  -----
    iniciarDemo();


})();
