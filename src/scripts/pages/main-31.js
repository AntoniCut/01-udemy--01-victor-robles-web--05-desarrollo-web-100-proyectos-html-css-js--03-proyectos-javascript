/*
    *  -----------------------------------------------------------  *
    *  -----  main-31.js  --  /src/scripts/pages/main-31.js  -----  *
    *  -----------------------------------------------------------  *
*/

(() => {


    console.log("\n");
    console.warn("-----  Proyecto 31 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLButtonElement | null} - `Botón anterior` */
    const $btnPrev = document.querySelector(".btns__prev");

    /** @type {HTMLButtonElement | null} - `Botón siguiente` */
    const $btnNext = document.querySelector(".btns__next");

    /** @type {HTMLDivElement | null} - `Barra de progreso` */
    const $stepsBar = document.querySelector(".steps__bar");

    /** @type {NodeListOf<HTMLElement> | null} - `Círculos de los pasos` */
    const $stepCircles = document.querySelectorAll(".steps__step");


    //  -----  verificación de elementos  -----
    if (!$btnPrev || !$btnNext || !$stepsBar || !$stepCircles || $stepCircles.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** - `altura actual de la barra de progreso (0-100)` */
    let progress = 0;

    /** - `paso activo actual (1-based)` */
    let counter = 1;

    /** - `incremento de progreso por paso` */
    const incremento = 100 / ($stepCircles.length - 1);


    /**
     * ----------------------------------------------
     * -----  `deshabilitarBotones(progreso)`  -----
     * ----------------------------------------------
     * - Habilita o deshabilita los botones según el progreso.
     * @param {number} progreso - Porcentaje actual de la barra (0-100).
     * @return {void}
     */
    const deshabilitarBotones = (progreso) => {

        //  -----  deshabilitar siguiente si se alcanzó el final  -----
        if (progreso >= 100) {
            $btnNext.setAttribute("disabled", "true");
            $btnNext.classList.add("disable");
        }
        //  -----  habilitar siguiente si quedan pasos  -----
        else {
            $btnNext.removeAttribute("disabled");
            $btnNext.classList.remove("disable");
        }

        //  -----  deshabilitar anterior si estamos en el inicio  -----
        if (progreso <= 0) {
            $btnPrev.setAttribute("disabled", "true");
            $btnPrev.classList.add("disable");
        }
        //  -----  habilitar anterior si hay pasos previos  -----
        else {
            $btnPrev.removeAttribute("disabled");
            $btnPrev.classList.remove("disable");
        }

    };


    /**
     * --------------------------------
     * -----  `activarBordes()`  -----
     * --------------------------------
     * - Marca como activos los pasos completados.
     * @return {void}
     */
    const activarBordes = () => {

        $stepCircles.forEach((step, index) => {

            //  -----  activar pasos completados  -----
            if (counter > index) {
                step.classList.add("active");
            }
            //  -----  desactivar pasos pendientes  -----
            else {
                step.classList.remove("active");
            }

        });

    };


    /**
     * ----------------------------------
     * -----  `actualizarVista()`  -----
     * ----------------------------------
     * - Actualiza la barra, botones y pasos activos.
     * @return {void}
     */
    const actualizarVista = () => {

        $stepsBar.style.height = `${progress}%`;
        deshabilitarBotones(progress);
        activarBordes();

    };


    /**
     * ------------------------------
     * -----  `avanzarPaso()`  -----
     * ------------------------------
     * - Avanza al siguiente paso.
     * @return {void}
     */
    const avanzarPaso = () => {

        counter++;
        progress += incremento;

        //  -----  limitar al último paso  -----
        if (counter > $stepCircles.length) {
            counter = $stepCircles.length;
            progress = 100;
        }

        actualizarVista();

    };


    /**
     * ---------------------------------
     * -----  `retrocederPaso()`  -----
     * ---------------------------------
     * - Retrocede al paso anterior.
     * @return {void}
     */
    const retrocederPaso = () => {

        counter--;
        progress -= incremento;

        //  -----  limitar al primer paso  -----
        if (counter < 1) {
            counter = 1;
            progress = 0;
        }

        actualizarVista();

    };


    //  -----  click en botón siguiente  -----
    $btnNext.addEventListener("click", () => {
        avanzarPaso();
    });


    //  -----  click en botón anterior  -----
    $btnPrev.addEventListener("click", () => {
        retrocederPaso();
    });


})();
