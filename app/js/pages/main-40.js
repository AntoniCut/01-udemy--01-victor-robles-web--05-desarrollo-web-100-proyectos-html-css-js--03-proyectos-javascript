/*
    *  -----------------------------------------------------------  *
    *  -----  main-40.js  --  /src/scripts/pages/main-40.js  -----  *
    *  -----------------------------------------------------------  *
*/

(() => {


    console.log("\n");
    console.warn("-----  Proyecto 40 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de estrellas` */
    const $starsDemo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__stars")
    );


    //  -----  verificación de elementos  -----
    if (!$starsDemo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLDivElement | null} - `Grupo de estrellas` */
    const $lista = /** @type {HTMLDivElement | null} */ (
        $starsDemo.querySelector(".stars__list")
    );

    /** @type {NodeListOf<HTMLButtonElement>} - `Botones de las estrellas` */
    const $stars = $starsDemo.querySelectorAll(".stars__star");


    //  -----  verificación de la lista de estrellas  -----
    if (!$lista || $stars.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * --------------------------------------
     * -----  `pintarEstrellas(hasta)`  -----
     * --------------------------------------
     * - Colorea hasta el índice indicado. Con -1 se apagan todas.
     * @param {number} hasta - Índice de la última estrella a colorear, o -1 para ninguna.
     * @return {void}
     */
    const pintarEstrellas = (hasta) => {

        $stars.forEach(($star, index) => {

            //  -----  si hay valoración y la estrella está en el rango, colorearla  -----
            if (hasta >= 0 && index <= hasta) {
                $star.classList.add("stars__star--active");
            }
            //  -----  si no entra en el rango, quitarle el color  -----
            else {
                $star.classList.remove("stars__star--active");
            }
        });
    };


    /**
     * ---------------------------------------
     * -----  `esSoloLaPrimeraActiva()`  -----
     * ---------------------------------------
     * - Comprueba si únicamente la primera estrella está marcada.
     * @return {boolean}
     */
    const esSoloLaPrimeraActiva = () => {

        /** @type {HTMLButtonElement} - `primera estrella` */
        const $primera = $stars[0];

        if (!$primera.classList.contains("stars__star--active")) {
            return false;
        }

        return !Array.from($stars).some(($star, index) => {
            return index > 0 && $star.classList.contains("stars__star--active");
        });
    };


    /**
     * -----------------------------------
     * -----  `vincularEstrellas()`  -----
     * -----------------------------------
     * - Colorea al pasar el ratón y permite dejar la valoración a cero.
     * @return {void}
     */
    const vincularEstrellas = () => {

        $stars.forEach(($star, index) => {

            //  -----  hover sobre una estrella  -----
            $star.addEventListener("mouseover", () => {
                pintarEstrellas(index);
            });

            //  -----  click para confirmar o desactivar la primera  -----
            $star.addEventListener("click", (event) => {
                event.preventDefault();

                //  -----  si solo está la primera, un segundo click la apaga  -----
                if (index === 0 && esSoloLaPrimeraActiva()) {
                    pintarEstrellas(-1);
                    return;
                }

                pintarEstrellas(index);
            });
        });


        /** @type {HTMLButtonElement} - `primera estrella` */
        const $primera = $stars[0];

        //  -----  al salir de la primera hacia fuera de la lista, apagar todas  -----
        $primera.addEventListener("mouseleave", (event) => {

            /** - `destino del evento` */
            const $destino = event.relatedTarget instanceof Node
                ? event.relatedTarget
                : null;

            //  -----  si el puntero sigue dentro de la lista, no apagar  -----
            if ($destino && $lista.contains($destino)) {
                return;
            }

            pintarEstrellas(-1);
        });
        
    };


    /**
     * -----------------------------
     * -----  `iniciarDemo()`  -----
     * -----------------------------
     * - Enlaza las estrellas al iniciar la demo.
     * @return {void}
     */
    const iniciarDemo = () => {
        vincularEstrellas();
    };


    //  -----  al iniciar la aplicación  -----
    iniciarDemo();


})();
