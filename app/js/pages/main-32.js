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

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del slider` */
    const $slider = document.querySelector(".demo__slider");

    /** @type {HTMLSectionElement | null} - `Contenedor de las diapositivas` */
    const $slidesContainer = $slider ? $slider.querySelector(".slider__slides") : null;

    /** @type {NodeListOf<HTMLArticleElement> | null} - `Diapositivas del slider` */
    const $slides = $slider ? $slider.querySelectorAll(".slides__item") : null;

    /** @type {NodeListOf<HTMLButtonElement> | null} - `Botones anterior` */
    const $btnsPrev = $slider ? $slider.querySelectorAll(".slider__prev") : null;

    /** @type {NodeListOf<HTMLButtonElement> | null} - `Botones siguiente` */
    const $btnsNext = $slider ? $slider.querySelectorAll(".slider__next") : null;

    /** @type {NodeListOf<HTMLButtonElement> | null} - `Botones de autoplay` */
    const $btnsAutoplay = $slider ? $slider.querySelectorAll(".slider__autoplay-toggle") : null;


    //  -----  verificación de elementos  -----
    if (
        !$slider ||
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


    /** - `índice de la diapositiva visible` */
    let count = 0;

    /** - `indica si el autoplay está activo` */
    let isAutoplay = true;

    /** - `intervalo del autoplay en milisegundos` */
    const AUTOPLAY_MS = 5000;

    /** @type {ReturnType<typeof setInterval> | undefined} - `identificador del intervalo de autoplay` */
    let autoplayInterval;


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

        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => irASlide(1), AUTOPLAY_MS);

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

        clearInterval(autoplayInterval);

        $btnsAutoplay.forEach((btn) => {
            btn.textContent = "▶ Reanudar";
        });

        isAutoplay = false;

    };


    $btnsPrev.forEach((btn) => {

        //  -----  click en botón anterior  -----
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            irASlide(-1);
        });

    });


    $btnsNext.forEach((btn) => {

        //  -----  click en botón siguiente  -----
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            irASlide(1);
        });

    });


    $btnsAutoplay.forEach((btn) => {

        //  -----  click en botón de autoplay  -----
        btn.addEventListener("click", (event) => {
            event.preventDefault();

            //  -----  si el autoplay está activo, detenerlo  -----
            if (isAutoplay) {
                detenerAutoplay();
            }
            //  -----  si el autoplay está detenido, reanudarlo  -----
            else {
                iniciarAutoplay();
            }

        });

    });


    //  -----  pausar el intervalo al pasar el ratón por el slider  -----
    $slidesContainer.addEventListener("mouseenter", () => {

        if (isAutoplay) {
            clearInterval(autoplayInterval);
        }

    });


    //  -----  reanudar el intervalo al salir del slider  -----
    $slidesContainer.addEventListener("mouseleave", () => {

        if (isAutoplay) {
            clearInterval(autoplayInterval);
            autoplayInterval = setInterval(() => irASlide(1), AUTOPLAY_MS);
        }

    });


    //  -----  inicializar  -----
    mostrarSlides();
    iniciarAutoplay();


})();
