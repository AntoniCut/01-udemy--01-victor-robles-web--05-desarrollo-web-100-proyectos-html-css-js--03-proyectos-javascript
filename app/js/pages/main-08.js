/*
    *  -----------------------------------------------------------  *
    *  -----  main-08.js  --  /src/scripts/pages/main-08.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 8 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo par o impar` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__par-impar")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLFormElement | null} - `formulario de comprobación` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".par-impar__form")
    );

    /** @type {HTMLInputElement | null} - `campo del número` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".par-impar__input")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje del resultado` */
    const $resultado = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".par-impar__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$form || !$input || !$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * -----------------------------
     * -----  `esPar(numero)`  -----
     * -----------------------------
     * - Determina si un número es par.
     * @param {number} numero - Número a evaluar.
     * @return {boolean} - `true` si el número es par.
     */
    const esPar = (numero) => numero % 2 === 0;


    /**
     * -----------------------------------------------
     * -----  `mostrarResultado(mensaje, tipo)`  -----
     * -----------------------------------------------
     * - Muestra el resultado en pantalla y consola.
     * @param {string} mensaje - Texto que verá el usuario.
     * @param {"par" | "impar" | "error"} tipo - Tipo visual del mensaje.
     * @return {void}
     */
    const mostrarResultado = (mensaje, tipo) => {

        console.log(mensaje);

        $resultado.classList.remove(
            "par-impar__resultado--par",
            "par-impar__resultado--impar",
            "par-impar__resultado--error"
        );
        $resultado.classList.add(`par-impar__resultado--${tipo}`);
        $resultado.textContent = mensaje;
    };


    /**
     * ----------------------------------
     * -----  `comprobarParImpar()`  -----
     * ----------------------------------
     * - Evalúa el número introducido y muestra si es par o impar.
     * @return {void}
     */
    const comprobarParImpar = () => {

        /** - `número introducido por el usuario` */
        const numero = Number($input.value);


        //  -----  validar que el número sea válido  -----
        if (Number.isNaN(numero)) {
            mostrarResultado("Introduce un número válido.", "error");
            return;
        }


        /** - `texto par o impar según el resultado` */
        const parImpar = esPar(numero) ? "par" : "impar";

        mostrarResultado(`El número ${numero} es ${parImpar}.`, parImpar);
    };


    //  -----  comprobar al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        comprobarParImpar();
    });


})();
