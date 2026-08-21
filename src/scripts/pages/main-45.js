/*
    *  -----------------------------------------------------------  *
    *  -----  main-45.js  --  /src/scripts/pages/main-45.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 45 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del slider vertical` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__vertical-slider")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLButtonElement | null} - `botón hacia arriba` */
    const $upButton = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".vertical-slider__btn--up")
    );

    /** @type {HTMLButtonElement | null} - `botón hacia abajo` */
    const $downButton = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".vertical-slider__btn--down")
    );

    /** @type {NodeListOf<HTMLArticleElement>} - `fondos del slider izquierdo` */
    const $leftBgs = /** @type {NodeListOf<HTMLArticleElement>} */ (
        $demo.querySelectorAll(".vertical-slider__bg")
    );

    /** @type {NodeListOf<HTMLArticleElement>} - `contenidos del slider derecho` */
    const $rightContents = /** @type {NodeListOf<HTMLArticleElement>} */ (
        $demo.querySelectorAll(".vertical-slider__content")
    );


    //  -----  verificación del slider  -----
    if (!$upButton || !$downButton || $leftBgs.length === 0 || $rightContents.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** - `número de diapositivas` */
    const sliderLength = $leftBgs.length;

    /** @type {number} - `índice de la diapositiva visible` */
    let sliderIndex = 0;


    /**
     * ----------------------------------
     * -----  `actualizarSlider()`  -----
     * ----------------------------------
     * - Coloca cada diapositiva según el índice activo.
     * @return {void}
     */
    const actualizarSlider = () => {

        $leftBgs.forEach((slide, index) => {
            slide.style.transform = `translateY(${(sliderIndex - index) * 100}%)`;
        });

        $rightContents.forEach((slide, index) => {
            slide.style.transform = `translateY(${(index - sliderIndex) * 100}%)`;
        });
    };


    /**
     * -----------------------------------
     * -----  `moverSlider(action)`  -----
     * -----------------------------------
     * - Cambia el índice y mueve las columnas en direcciones opuestas.
     * @param {SliderAction} action - Dirección del movimiento.
     * @return {void}
     */
    const moverSlider = (action) => {

        //  -----  avanzar  -----
        if (action === "up") {
            sliderIndex++;

            if (sliderIndex > sliderLength - 1) {
                sliderIndex = 0;
            }
        }
        //  -----  retroceder  -----
        else if (action === "down") {
            sliderIndex--;

            if (sliderIndex < 0) {
                sliderIndex = sliderLength - 1;
            }
        }

        actualizarSlider();
    };


    //  -----  botón arriba  -----
    $upButton.addEventListener("click", (event) => {
        event.preventDefault();
        moverSlider("up");
    });

    //  -----  botón abajo  -----
    $downButton.addEventListener("click", (event) => {
        event.preventDefault();
        moverSlider("down");
    });


    actualizarSlider();
    
})();
