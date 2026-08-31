/*
    *  -----------------------------------------------------------  *
    *  -----  main-32.js  --  /src/scripts/pages/main-32.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 32 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `demo del slider de imágenes` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__slider")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo del slider.");
    }


    /** @type {HTMLElement | null} - `contenedor de las diapositivas` */
    const $slidesContainer = /** @type {HTMLElement | null} */ (
        $demo.querySelector(".slider__slides")
    );

    /** @type {NodeListOf<HTMLElement> | null} - `diapositivas del slider` */
    const $slides = /** @type {NodeListOf<HTMLElement> | null} */ (
        $demo.querySelectorAll(".slides__item")
    );

    /** @type {NodeListOf<HTMLButtonElement> | null} - `botones anterior` */
    const $btnsPrev = /** @type {NodeListOf<HTMLButtonElement> | null} */ (
        $demo.querySelectorAll(".slider__prev")
    );

    /** @type {NodeListOf<HTMLButtonElement> | null} - `botones siguiente` */
    const $btnsNext = /** @type {NodeListOf<HTMLButtonElement> | null} */ (
        $demo.querySelectorAll(".slider__next")
    );

    /** @type {NodeListOf<HTMLButtonElement> | null} - `botones de autoplay` */
    const $btnsAutoplay = /** @type {NodeListOf<HTMLButtonElement> | null} */ (
        $demo.querySelectorAll(".slider__autoplay-toggle")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (
        !$slidesContainer ||
        !$slides ||
        $slides.length === 0 ||
        !$btnsPrev ||
        $btnsPrev.length === 0 ||
        !$btnsNext ||
        $btnsNext.length === 0 ||
        !$btnsAutoplay ||
        $btnsAutoplay.length === 0
    ) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        *  -----------------------  *
        *  -----  Variables  -----  *
        *  -----------------------  *
    */

    /** - `índice de la diapositiva visible` */
    let count = 0;

    /** - `indica si el autoplay está activo` */
    let isAutoplay = true;

    /** - `intervalo del autoplay en milisegundos` */
    const AUTOPLAY_MS = 5000;

    /** @type {number | null} - `identificador del intervalo de autoplay` */
    let autoplayInterval = null;


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * -------------------------------
     * -----  `mostrarSlides()`  -----
     * -------------------------------
     * - Desplaza cada diapositiva según el índice actual.
     * @return {void}
     */
    const mostrarSlides = () => {

        $slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - count) * 100}%)`;
        });
    };


    /**
     * -----------------------------------
     * -----  `irASlide(direccion)`  -----
     * -----------------------------------
     * - Avanza o retrocede a la diapositiva siguiente o anterior.
     * @param {number} direccion - `1` para siguiente, `-1` para anterior.
     * @return {void}
     */
    const irASlide = (direccion) => {

        count += direccion;

        //  -----  volver a la última diapositiva si se retrocede desde la primera  -----
        if (count < 0) {
            count = $slides.length - 1;
        }

        //  -----  volver a la primera diapositiva si se avanza desde la última  -----
        if (count >= $slides.length) {
            count = 0;
        }

        mostrarSlides();
    };


    /**
     * ---------------------------------
     * -----  `iniciarAutoplay()`  -----
     * ---------------------------------
     * - Inicia el avance automático de las diapositivas.
     * @return {void}
     */
    const iniciarAutoplay = () => {

        if (autoplayInterval !== null) {
            window.clearInterval(autoplayInterval);
        }

        autoplayInterval = window.setInterval(() => irASlide(1), AUTOPLAY_MS);

        $btnsAutoplay.forEach((btn) => {
            btn.textContent = "⏸ Pausar";
        });

        isAutoplay = true;
    };


    /**
     * ---------------------------------
     * -----  `detenerAutoplay()`  -----
     * ---------------------------------
     * - Detiene el avance automático de las diapositivas.
     * @return {void}
     */
    const detenerAutoplay = () => {

        if (autoplayInterval !== null) {
            window.clearInterval(autoplayInterval);
            autoplayInterval = null;
        }

        $btnsAutoplay.forEach((btn) => {
            btn.textContent = "▶ Reanudar";
        });

        isAutoplay = false;
    };


    /**
     * ---------------------------------------
     * -----  `pausarAutoplayHover()`  -----
     * ---------------------------------------
     * - Pausa temporalmente el autoplay al pasar el ratón.
     * @return {void}
     */
    const pausarAutoplayHover = () => {

        if (!isAutoplay || autoplayInterval === null) {
            return;
        }

        window.clearInterval(autoplayInterval);
        autoplayInterval = null;
    };


    /**
     * -----------------------------------------
     * -----  `reanudarAutoplayHover()`  -----
     * -----------------------------------------
     * - Reanuda el autoplay al salir el ratón del slider.
     * @return {void}
     */
    const reanudarAutoplayHover = () => {

        if (!isAutoplay || autoplayInterval !== null) {
            return;
        }

        autoplayInterval = window.setInterval(() => irASlide(1), AUTOPLAY_MS);
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  click en botones anteriores  -----
    $btnsPrev.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            irASlide(-1);
        });
    });


    //  -----  click en botones siguientes  -----
    $btnsNext.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            irASlide(1);
        });
    });


    //  -----  click en botones de autoplay  -----
    $btnsAutoplay.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();

            //  -----  alternar autoplay  -----
            if (isAutoplay) {
                detenerAutoplay();
                return;
            }

            iniciarAutoplay();
        });
    });


    //  -----  pausar el autoplay al pasar el ratón  -----
    $slidesContainer.addEventListener("mouseenter", () => {
        pausarAutoplayHover();
    });


    //  -----  reanudar el autoplay al salir el ratón  -----
    $slidesContainer.addEventListener("mouseleave", () => {
        reanudarAutoplayHover();
    });


    //  -----  estado inicial del slider  -----
    mostrarSlides();
    iniciarAutoplay();


})();
