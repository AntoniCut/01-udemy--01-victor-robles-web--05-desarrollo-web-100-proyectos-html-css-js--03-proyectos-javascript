/*
    *  -----------------------------------------------------------  *
    *  -----  main-04.js  --  /src/scripts/pages/main-04.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 4 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de sueldo` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__sueldo")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLFormElement | null} - `formulario de clasificación` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".sueldo__form")
    );

    /** @type {HTMLInputElement | null} - `campo del sueldo` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".sueldo__input")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje del resultado` */
    const $resultado = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".sueldo__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$form || !$input || !$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * -----------------------------------------------
     * -----  `mostrarResultado(mensaje, tipo)`  -----
     * -----------------------------------------------
     * - Muestra la clasificación del sueldo en la demo.
     * @param {string} mensaje - Texto que verá el usuario.
     * @param {"bajo" | "minimo" | "bueno" | "extra" | "estudiante" | "error"} tipo - Tipo visual del mensaje.
     * @return {void}
     */
    const mostrarResultado = (mensaje, tipo) => {

        $resultado.classList.remove(
            "sueldo__resultado--bajo",
            "sueldo__resultado--minimo",
            "sueldo__resultado--bueno",
            "sueldo__resultado--extra",
            "sueldo__resultado--estudiante",
            "sueldo__resultado--error"
        );
        $resultado.classList.add(`sueldo__resultado--${tipo}`);
        $resultado.textContent = mensaje;
    };


    /**
     * ----------------------------------
     * -----  `clasificarSueldo()`  -----
     * ----------------------------------
     * - Compara el sueldo con los tramos y muestra el tipo correspondiente.
     * @return {void}
     */
    const clasificarSueldo = () => {

        /** - `sueldo introducido por el usuario` */
        const sueldo = Number($input.value);


        //  -----  validar que el sueldo sea un número válido  -----
        if (Number.isNaN(sueldo) || sueldo < 0) {
            mostrarResultado("Introduce un sueldo válido (0 o más).", "error");
            return;
        }


        /*
            ----------------------------------------------------------------
            -----  switch comparando el sueldo con diferentes tramos  -----
            ----------------------------------------------------------------
        */
        switch (true) {

            //  -----  media jornada  -----
            case sueldo <= 500:
                console.log("Trabajas a media jornada.");
                mostrarResultado("Trabajas a media jornada.", "bajo");
                break;

            //  -----  salario mínimo  -----
            case sueldo <= 1000 && sueldo > 500:
                console.log("Tienes el salario mínimo.");
                mostrarResultado("Tienes el salario mínimo.", "minimo");
                break;

            //  -----  sueldo bueno  -----
            case sueldo <= 1700 && sueldo > 1000:
                console.log("Tienes un sueldo bueno.");
                mostrarResultado("Tienes un sueldo bueno.", "bueno");
                break;

            //  -----  sueldo extraordinario  -----
            case sueldo > 1700:
                console.log("Tienes un sueldo extraordinario.");
                mostrarResultado("Tienes un sueldo extraordinario.", "extra");
                break;

            //  -----  sin sueldo  -----
            default:
                console.log("Eres un estudiante, porque no tienes sueldo.");
                mostrarResultado("Eres un estudiante, porque no tienes sueldo.", "estudiante");
                break;
        }
    };


    //  -----  clasificar al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        clasificarSueldo();
    });


})();
