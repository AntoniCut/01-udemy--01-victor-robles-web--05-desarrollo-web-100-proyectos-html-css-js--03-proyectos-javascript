/*
    *  -----------------------------------------------------------  *
    *  -----  main-24.js  --  /src/scripts/pages/main-24.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 24 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `demo del formulario de contraseña` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__password-eye")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo de la contraseña.");
    }


    /** @type {HTMLFormElement | null} - `formulario de contraseña` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".password-eye__form")
    );

    /** @type {HTMLInputElement | null} - `campo de contraseña` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".password-eye__input")
    );

    /** @type {HTMLButtonElement | null} - `botón del ojo` */
    const $toggle = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".password-eye__toggle")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (!$form || !$input || !$toggle) {
        throw new Error("No se han encontrado los elementos necesarios de la contraseña.");
    }


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * -------------------------------------
     * -----  `alternarVisibilidad()`  -----
     * -------------------------------------
     * - Muestra u oculta el texto de la contraseña.
     * @return {void}
     */
    const alternarVisibilidad = () => {

        /** - `la contraseña se está mostrando` */
        const visible = $input.type === "text";

        //  -----  si está visible o el campo está vacío, volver a ocultar  -----
        if (visible || $input.value.trim() === "") {
            $input.type = "password";
            $toggle.setAttribute("aria-pressed", "false");
            $toggle.setAttribute("aria-label", "Mostrar contraseña");
            return;
        }

        $input.type = "text";
        $toggle.setAttribute("aria-pressed", "true");
        $toggle.setAttribute("aria-label", "Ocultar contraseña");
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  evitar que el formulario recargue la página  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
    });


    //  -----  pulsar el ojo para mostrar u ocultar  -----
    $toggle.addEventListener("click", (event) => {
        event.preventDefault();
        alternarVisibilidad();
    });


})();
