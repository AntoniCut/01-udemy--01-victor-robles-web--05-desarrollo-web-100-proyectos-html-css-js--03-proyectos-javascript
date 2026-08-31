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

    /** @type {HTMLElement | null} - `demo de pasos con barra de progreso` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__steps")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo de pasos.");
    }


    /** @type {HTMLButtonElement | null} - `botón anterior` */
    const $btnPrev = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".steps__btn--prev")
    );

    /** @type {HTMLButtonElement | null} - `botón siguiente` */
    const $btnNext = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".steps__btn--next")
    );

    /** @type {HTMLDivElement | null} - `barra de progreso` */
    const $stepsBar = /** @type {HTMLDivElement | null} */ (
        $demo.querySelector(".steps__bar")
    );

    /** @type {NodeListOf<HTMLElement> | null} - `círculos de los pasos` */
    const $stepCircles = /** @type {NodeListOf<HTMLElement> | null} */ (
        $demo.querySelectorAll(".steps__step")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (!$btnPrev || !$btnNext || !$stepsBar || !$stepCircles || $stepCircles.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        *  -----------------------  *
        *  -----  Variables  -----  *
        *  -----------------------  *
    */

    /** - `altura actual de la barra de progreso (0-100)` */
    let progress = 0;

    /** - `paso activo actual (1-based)` */
    let counter = 1;

    /** - `incremento de progreso por paso` */
    const incremento = 100 / ($stepCircles.length - 1);


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

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
            $btnNext.classList.add("steps__btn--disabled");
            $btnPrev.removeAttribute("disabled");
            $btnPrev.classList.remove("steps__btn--disabled");
            return;
        }

        //  -----  deshabilitar anterior si estamos en el inicio  -----
        if (progreso <= 0) {
            $btnPrev.setAttribute("disabled", "true");
            $btnPrev.classList.add("steps__btn--disabled");
            $btnNext.removeAttribute("disabled");
            $btnNext.classList.remove("steps__btn--disabled");
            return;
        }

        $btnPrev.removeAttribute("disabled");
        $btnPrev.classList.remove("steps__btn--disabled");
        $btnNext.removeAttribute("disabled");
        $btnNext.classList.remove("steps__btn--disabled");
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
                step.classList.add("steps__step--active");
                return;
            }

            //  -----  desactivar pasos pendientes  -----
            step.classList.remove("steps__step--active");
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


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  click en botón siguiente  -----
    $btnNext.addEventListener("click", (event) => {
        event.preventDefault();
        avanzarPaso();
    });


    //  -----  click en botón anterior  -----
    $btnPrev.addEventListener("click", (event) => {
        event.preventDefault();
        retrocederPaso();
    });


    //  -----  estado inicial de la demo  -----
    actualizarVista();


})();
