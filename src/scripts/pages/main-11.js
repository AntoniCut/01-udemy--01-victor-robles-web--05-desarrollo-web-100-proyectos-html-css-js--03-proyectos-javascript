/*
    *  -----------------------------------------------------------  *
    *  -----  main-11.js  --  /src/scripts/pages/main-11.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 11 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de reemplazo` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__reemplazo")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLFormElement | null} - `formulario de reemplazo` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".reemplazo__form")
    );

    /** @type {HTMLInputElement | null} - `campo de la frase` */
    const $frase = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector("#reemplazo-frase")
    );

    /** @type {HTMLInputElement | null} - `campo de la palabra a reemplazar` */
    const $palabra = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector("#reemplazo-palabra")
    );

    /** @type {HTMLInputElement | null} - `campo de la palabra nueva` */
    const $reemplazo = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector("#reemplazo-nueva-palabra")
    );

    /** @type {HTMLDivElement | null} - `contenedor del resultado` */
    const $resultado = /** @type {HTMLDivElement | null} */ (
        $demo.querySelector(".reemplazo__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$form || !$frase || !$palabra || !$reemplazo || !$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * -------------------------------------
     * -----  `mostrarError(mensaje)`  -----
     * -------------------------------------
     * - Muestra un mensaje de error en la demo.
     * @param {string} mensaje - Texto del error.
     * @return {void}
     */
    const mostrarError = (mensaje) => {

        $resultado.classList.remove("reemplazo__resultado--ok");
        $resultado.classList.add("reemplazo__resultado--error");
        $resultado.textContent = mensaje;
    };


    /**
     * ------------------------------------------------------------
     * -----  `reemplazarPalabra(frase, palabra, reemplazo)`  -----
     * ------------------------------------------------------------
     * - Reemplaza la primera coincidencia de una palabra en una frase.
     * @param {string} frase - Frase completa.
     * @param {string} palabra - Palabra que se quiere reemplazar.
     * @param {string} reemplazo - Texto que sustituirá a la palabra.
     * @return {string | null} - Frase modificada o null si no existe la palabra.
     */
    const reemplazarPalabra = (frase, palabra, reemplazo) => {

        if (!frase.includes(palabra)) {
            return null;
        }

        return frase.replace(palabra, reemplazo);
    };


    /**
     * -----------------------------------
     * -----  `crearLinea(etiqueta, valor)`  -----
     * -----------------------------------
     * - Crea una línea de información para el resultado.
     * @param {string} etiqueta - Nombre del dato.
     * @param {string} valor - Valor del dato.
     * @return {HTMLParagraphElement} - Línea creada.
     */
    const crearLinea = (etiqueta, valor) => {

        const $linea = document.createElement("p");
        const $etiqueta = document.createElement("strong");
        const $valor = document.createElement("span");

        $etiqueta.textContent = `${etiqueta}: `;
        $valor.textContent = valor;
        $linea.append($etiqueta, $valor);

        return $linea;
    };


    /**
     * -------------------------------------------------------------
     * -----  `mostrarResultado(frase, palabra, reemplazo, fraseFinal)`  -----
     * -------------------------------------------------------------
     * - Pinta los datos de la operación y la frase modificada.
     * @param {string} frase - Frase original.
     * @param {string} palabra - Palabra buscada.
     * @param {string} reemplazo - Palabra de reemplazo.
     * @param {string} fraseFinal - Frase resultante.
     * @return {void}
     */
    const mostrarResultado = (frase, palabra, reemplazo, fraseFinal) => {

        $resultado.classList.remove("reemplazo__resultado--error");
        $resultado.classList.add("reemplazo__resultado--ok");
        $resultado.replaceChildren(
            crearLinea("Frase original", frase),
            crearLinea("Palabra buscada", palabra),
            crearLinea("Palabra de reemplazo", reemplazo),
            crearLinea("Nueva frase", fraseFinal)
        );
    };


    /**
     * --------------------------------------
     * -----  `procesarFormulario()`  -----
     * --------------------------------------
     * - Valida los datos y muestra la frase con el reemplazo.
     * @return {void}
     */
    const procesarFormulario = () => {

        const frase = $frase.value.trim();
        const palabra = $palabra.value.trim();
        const reemplazo = $reemplazo.value.trim();


        //  -----  validar que se hayan introducido todos los datos  -----
        if (!frase || !palabra || !reemplazo) {
            mostrarError("Completa todos los campos para realizar el reemplazo.");
            return;
        }


        const fraseFinal = reemplazarPalabra(frase, palabra, reemplazo);

        if (fraseFinal === null) {
            mostrarError("La palabra buscada no existe en la frase.");
            return;
        }


        console.log(`La nueva frase es: ${fraseFinal}`);
        mostrarResultado(frase, palabra, reemplazo, fraseFinal);
    };


    //  -----  procesar al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        procesarFormulario();
    });


})();
