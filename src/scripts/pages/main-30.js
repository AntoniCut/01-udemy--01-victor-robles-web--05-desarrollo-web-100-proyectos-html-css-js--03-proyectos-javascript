/*
    *  -----------------------------------------------------------  *
    *  -----  main-30.js  --  /src/scripts/pages/main-30.js  -----  *
    *  -----------------------------------------------------------  *
*/

(() => {


    console.log("\n");
    console.warn("-----  Proyecto 30 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de redes sociales` */
    const $socials = document.querySelector(".demo__socials");

    /** @type {NodeListOf<HTMLSpanElement> | null} - `Números de followers` */
    const $followers = $socials ? $socials.querySelectorAll(".socials__number") : null;


    //  -----  verificación de elementos  -----
    if (!$socials || !$followers || $followers.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * --------------------------------------
     * -----  `animarContador(number)`  -----
     * --------------------------------------
     * - Anima el contador desde 0 hasta el valor objetivo.
     * @param {HTMLSpanElement} number - El elemento que muestra el número.
     * @return {void}
     */
    const animarContador = (number) => {

        /** - `valor objetivo de followers` */
        const max = Number.parseInt(number.dataset.target ?? "0", 10);

        //  -----  si el objetivo no es válido, salir  -----
        if (Number.isNaN(max) || max <= 0) {
            return;
        }

        /** - `valor actual del contador` */
        let actual = 0;

        /** - `incremento por tick de la animación` */
        const increment = Math.ceil(max / 100);

        const interval = setInterval(() => {

            actual = Math.min(actual + increment, max);
            number.textContent = String(actual);

            //  -----  si se alcanzó el objetivo, detener  -----
            if (actual >= max) {
                clearInterval(interval);
            }

        }, 20);

    };


    $followers.forEach((number) => {
        animarContador(number);
    });


})();
