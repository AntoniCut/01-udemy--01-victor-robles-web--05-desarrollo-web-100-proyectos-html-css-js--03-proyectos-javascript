/*
    *  -----------------------------------------------------------  *
    *  -----  main-29.js  --  /src/scripts/pages/main-29.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 29 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `demo del formulario de login` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__login")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo de login.");
    }


    /** @type {HTMLFormElement | null} - `formulario de login` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".login__form")
    );

    /** @type {NodeListOf<HTMLDivElement> | null} - `controles del formulario` */
    const $controls = /** @type {NodeListOf<HTMLDivElement> | null} */ (
        $form ? $form.querySelectorAll(".form__control") : null
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (!$form || !$controls || $controls.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * ---------------------------------------------
     * -----  `actualizarLabel(label, input)`  -----
     * ---------------------------------------------
     * - Coloca el label dentro o fuera del input según el foco y el texto.
     * @param {HTMLLabelElement} label - El label del control.
     * @param {HTMLInputElement} input - El input del control.
     * @return {void}
     */
    const actualizarLabel = (label, input) => {

        /** - `el input tiene texto` */
        const tieneTexto = input.value.trim() !== "";

        /** - `el input está enfocado` */
        const estaEnfocado = document.activeElement === input;

        //  -----  si hay texto o el input está enfocado, sacar el label  -----
        if (tieneTexto || estaEnfocado) {
            label.classList.remove("form__label--blur");
            label.classList.add("form__label--focus");
            return;
        }

        //  -----  si está vacío y sin foco, devolver el label al input  -----
        label.classList.remove("form__label--focus");
        label.classList.add("form__label--blur");
    };


    /**
     * ---------------------------------------
     * -----  `inicializarControl()`  -----
     * ---------------------------------------
     * - Asigna los eventos de un control del formulario.
     * @param {HTMLDivElement} control - Contenedor del label y el input.
     * @return {void}
     */
    const inicializarControl = (control) => {

        /** @type {HTMLLabelElement | null} - `label del control` */
        const $label = /** @type {HTMLLabelElement | null} */ (
            control.querySelector(".form__label")
        );

        /** @type {HTMLInputElement | null} - `input del control` */
        const $input = /** @type {HTMLInputElement | null} */ (
            control.querySelector(".form__input")
        );

        //  -----  si faltan el label o el input, saltar este control  -----
        if (!$label || !$input) {
            return;
        }

        //  -----  foco en el input  -----
        $input.addEventListener("focus", () => {
            actualizarLabel($label, $input);
        });

        //  -----  salida del input  -----
        $input.addEventListener("blur", () => {
            actualizarLabel($label, $input);
        });

        //  -----  cambio de texto en el input  -----
        $input.addEventListener("input", () => {
            actualizarLabel($label, $input);
        });
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  inicializamos cada control del formulario  -----
    $controls.forEach((control) => {
        inicializarControl(control);
    });


    //  -----  envío del formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
    });


})();
