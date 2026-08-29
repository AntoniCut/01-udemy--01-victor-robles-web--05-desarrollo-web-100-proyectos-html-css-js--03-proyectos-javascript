/*
    *  -----------------------------------------------------------  *
    *  -----  main-23.js  --  /src/scripts/pages/main-23.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 23 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `demo del validador` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__email")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo del validador de email.");
    }


    /** @type {HTMLFormElement | null} - `formulario de validación` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".email__form")
    );

    /** @type {HTMLInputElement | null} - `campo de email` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".email__input")
    );

    /** @type {HTMLElement | null} - `icono de email correcto` */
    const $check = /** @type {HTMLElement | null} */ (
        $demo.querySelector(".email__check")
    );

    /** @type {HTMLElement | null} - `icono de email incorrecto` */
    const $error = /** @type {HTMLElement | null} */ (
        $demo.querySelector(".email__error")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (!$form || !$input || !$check || !$error) {
        throw new Error("No se han encontrado los elementos necesarios del validador.");
    }


    /*
        *  -----------------------  *
        *  -----  Variables  -----  *
        *  -----------------------  *
    */

    /** @type {RegExp} - `patrón para validar el email` */
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * ------------------------------
     * -----  `validarEmail()`  -----
     * ------------------------------
     * - Valida el email y muestra el check o la cruz.
     * @return {void}
     */
    const validarEmail = () => {

        /** @type {string} - `email escrito por el usuario` */
        const email = $input.value.trim();

        //  -----  si el campo está vacío, ocultar ambos iconos  -----
        if (email === "") {
            $check.classList.remove("email__check--show");
            $error.classList.remove("email__error--show");
            $input.removeAttribute("aria-invalid");
            return;
        }

        /** - `el email cumple el patrón` */
        const esValido = pattern.test(email);

        $check.classList.toggle("email__check--show", esValido);
        $error.classList.toggle("email__error--show", !esValido);
        $input.setAttribute("aria-invalid", esValido ? "false" : "true");
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  evitar que el formulario recargue la página  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        validarEmail();
    });


    //  -----  marcar el foco del formulario  -----
    $input.addEventListener("focus", () => {
        $form.classList.add("email__form--focus");
    });


    //  -----  quitar el foco del formulario  -----
    $input.addEventListener("blur", () => {
        $form.classList.remove("email__form--focus");
    });


    //  -----  validar al escribir  -----
    $input.addEventListener("input", () => {
        validarEmail();
    });


})();
