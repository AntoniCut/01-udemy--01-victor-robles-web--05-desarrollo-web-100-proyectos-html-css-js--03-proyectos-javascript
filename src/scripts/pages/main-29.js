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

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de login` */
    const $login = document.querySelector(".demo__login");

    /** @type {HTMLFormElement | null} - `Formulario de login` */
    const $form = $login ? $login.querySelector(".login__form") : null;

    /** @type {NodeListOf<HTMLDivElement> | null} - `Controles del formulario` */
    const $controls = $form ? $form.querySelectorAll(".form__control") : null;


    //  -----  verificación de elementos  -----
    if (!$login || !$form || !$controls || $controls.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


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

        /** - `Verifica si el input tiene texto` */
        const tieneTexto = input.value.trim() !== "";
        
        /** - `Verifica si el input está enfocado` */
        const estaEnfocado = document.activeElement === input;

        //  -----  si hay texto o el input está enfocado, sacar el label  -----
        if (tieneTexto || estaEnfocado) {
            label.classList.remove("form__label--blur");
            label.classList.add("form__label--focus");
        }
        
        //  -----  si está vacío y sin foco, devolver el label al input  -----
        else {
            label.classList.remove("form__label--focus");
            label.classList.add("form__label--blur");
        }

    };


    $controls.forEach((control) => {
        
        /** @type {HTMLLabelElement | null} - `Label del control` */
        const $label = control.querySelector(".form__label");

        /** @type {HTMLInputElement | null} - `Input del control` */
        const $input = control.querySelector(".form__input");

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

    });


    //  -----  envío del formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
    });


})();
