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

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de estrella` */
    const $star = document.querySelector(".demo__star");

    /** @type {HTMLElement | null} - `icono de estrella gris` */
    const $grayStar = $star ? $star.querySelector(".star__icon--gray") : null;

    /** @type {HTMLElement | null} - `icono de estrella amarilla` */
    const $yellowStar = $star ? $star.querySelector(".star__icon--yellow") : null;


    //  -----  verificación de elementos  -----
    if (!$star || !$grayStar || !$yellowStar) {
        throw new Error("No se han podido encontrar los elementos en el DOM");
    }


    //  -----  click en la estrella gris  -----
    $grayStar.addEventListener("click", (event) => {
        event.preventDefault();
        $yellowStar.classList.add("star__icon--visible");
        $grayStar.classList.add("star__icon--active");
    });


    //  -----  click en la estrella amarilla  -----
    $yellowStar.addEventListener("click", (event) => {
        event.preventDefault();
        $yellowStar.classList.remove("star__icon--visible");
        $grayStar.classList.remove("star__icon--active");
    });


})();
