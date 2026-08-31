/*
    *  -----------------------------------------------------------  *
    *  -----  main-28.js  --  /src/scripts/pages/main-28.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 28 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `demo de carga con blur` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__load")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo de carga.");
    }


    /** @type {HTMLPictureElement | null} - `fondo con la imagen` */
    const $background = /** @type {HTMLPictureElement | null} */ (
        $demo.querySelector(".load__background")
    );

    /** @type {HTMLParagraphElement | null} - `porcentaje de carga` */
    const $number = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".load__number")
    );

    /** @type {HTMLButtonElement | null} - `botón para iniciar la carga` */
    const $btnLoad = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".load__btn")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje de carga completada` */
    const $complete = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".load__complete")
    );

    /** @type {HTMLButtonElement | null} - `botón para reiniciar la carga` */
    const $btnReset = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".load__btn-reset")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (!$background || !$number || !$btnLoad || !$complete || !$btnReset) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        *  -----------------------  *
        *  -----  Variables  -----  *
        *  -----------------------  *
    */

    /** - `desenfoque inicial en píxeles` */
    const BLUR_INICIAL = 30;

    /** - `porcentaje de carga` */
    let percent = 1;

    /** - `desenfoque actual en píxeles` */
    let blur = BLUR_INICIAL;

    /** @type {number | null} - `identificador del intervalo de carga` */
    let intervalId = null;


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * ------------------------------
     * -----  `iniciarCarga()`  -----
     * ------------------------------
     * - Inicia la animación de carga y elimina el desenfoque de la imagen.
     * @return {void}
     */
    const iniciarCarga = () => {

        $btnLoad.classList.add("load__btn--hidden");

        intervalId = window.setInterval(() => {

            percent++;
            blur -= BLUR_INICIAL / 100;

            //  -----  si la carga ha terminado  -----
            if (percent > 100) {

                if (intervalId !== null) {
                    window.clearInterval(intervalId);
                    intervalId = null;
                }

                $complete.classList.remove("load__complete--hidden");
                $btnReset.classList.remove("load__btn-reset--hidden");
                return;
            }

            //  -----  actualizamos el porcentaje y el desenfoque  -----
            $number.textContent = `${percent}%`;
            $background.style.filter = `blur(${blur}px)`;

        }, 20);
    };


    /**
     * -------------------------------
     * -----  `resetearCarga()`  -----
     * -------------------------------
     * - Restaura el estado inicial de la carga y el desenfoque de la imagen.
     * @return {void}
     */
    const resetearCarga = () => {

        if (intervalId !== null) {
            window.clearInterval(intervalId);
            intervalId = null;
        }

        percent = 1;
        blur = BLUR_INICIAL;

        $number.textContent = "0%";
        $background.style.filter = "";
        $complete.classList.add("load__complete--hidden");
        $btnReset.classList.add("load__btn-reset--hidden");
        $btnLoad.classList.remove("load__btn--hidden");
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  click en cargar  -----
    $btnLoad.addEventListener("click", (event) => {
        event.preventDefault();
        iniciarCarga();
    });


    //  -----  click en reiniciar  -----
    $btnReset.addEventListener("click", (event) => {
        event.preventDefault();
        resetearCarga();
    });


})();
