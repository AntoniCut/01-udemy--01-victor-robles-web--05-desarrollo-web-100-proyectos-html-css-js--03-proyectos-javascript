/*
    *  -----------------------------------------------------------  *
    *  -----  main-26.js  --  /src/scripts/pages/main-26.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 26 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `demo de estrella favorita` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__star")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo de la estrella.");
    }


    /** @type {HTMLElement | null} - `icono de estrella gris` */
    const $grayStar = /** @type {HTMLElement | null} */ (
        $demo.querySelector(".star__icon--gray")
    );

    /** @type {HTMLElement | null} - `icono de estrella amarilla` */
    const $yellowStar = /** @type {HTMLElement | null} */ (
        $demo.querySelector(".star__icon--yellow")
    );


    //  -----  validamos que existan los iconos de la estrella  -----
    if (!$grayStar || !$yellowStar) {
        throw new Error("No se han encontrado los iconos de la estrella.");
    }


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * ------------------------------
     * -----  `marcarFavorito()`  -----
     * ------------------------------
     * - Pinta la estrella de amarillo y lanza la animación.
     * @return {void}
     */
    const marcarFavorito = () => {
        $yellowStar.classList.add("star__icon--visible");
        $grayStar.classList.add("star__icon--active");
    };


    /**
     * -----------------------------
     * -----  `quitarFavorito()`  -----
     * -----------------------------
     * - Restaura la estrella gris.
     * @return {void}
     */
    const quitarFavorito = () => {
        $yellowStar.classList.remove("star__icon--visible");
        $grayStar.classList.remove("star__icon--active");
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  click en la estrella gris  -----
    $grayStar.addEventListener("click", (event) => {
        event.preventDefault();
        marcarFavorito();
    });


    //  -----  click en la estrella amarilla  -----
    $yellowStar.addEventListener("click", (event) => {
        event.preventDefault();
        quitarFavorito();
    });


})();
