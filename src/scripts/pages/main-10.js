/*
    *  -----------------------------------------------------------  *
    *  -----  main-10.js  --  /src/scripts/pages/main-10.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 10 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo palabra` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__palabra")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLFormElement | null} - `formulario de comprobación` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".palabra__form")
    );

    /** @type {HTMLInputElement | null} - `campo de la palabra` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".palabra__input")
    );

    /** @type {HTMLHeadingElement | null} - `encabezado del resultado` */
    const $resultado = /** @type {HTMLHeadingElement | null} */ (
        $demo.querySelector(".palabra__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$form || !$input || !$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * -----------------------------------------------
     * -----  `mostrarResultado(mensaje, tipo)`  -----
     * -----------------------------------------------
     * - Muestra el mensaje en el encabezado de resultado.
     * @param {string} mensaje - Texto que verá el usuario.
     * @param {"ok" | "error"} tipo - Tipo visual del mensaje.
     * @return {void}
     */
    const mostrarResultado = (mensaje, tipo) => {

        console.log(mensaje);

        $resultado.classList.remove(
            "palabra__resultado--ok",
            "palabra__resultado--error"
        );
        $resultado.classList.add(`palabra__resultado--${tipo}`);
        $resultado.textContent = mensaje;
    };


    /**
     * ------------------------------------------
     * -----  `contarYMayusculas(palabra)`  -----
     * ------------------------------------------
     * - Convierte una palabra a mayúsculas y devuelve su conteo de letras.
     * @param {string} palabra - Palabra introducida por el usuario.
     * @return {{ mayusculas: string, totalLetras: number }} - Palabra en mayúsculas y cantidad de letras.
     */
    const contarYMayusculas = (palabra) => {

        /** - `palabra convertida a mayúsculas` */
        const mayusculas = palabra.toUpperCase();

        /** - `cantidad de letras de la palabra` */
        const totalLetras = palabra.length;

        return { mayusculas, totalLetras };
    };


    /**
     * ----------------------------------
     * -----  `comprobarPalabra()`  -----
     * ----------------------------------
     * - Valida la palabra introducida y muestra el resultado en pantalla.
     * @return {void}
     */
    const comprobarPalabra = () => {

        /** - `texto introducido por el usuario` */
        const palabra = $input.value.trim();

        //  -----  validar que se haya introducido una palabra  -----
        if (palabra.length === 0) {
            mostrarResultado("Introduce una palabra válida.", "error");
            return;
        }

        //  -----  validar que no sea un número  -----
        if (!Number.isNaN(Number(palabra))) {
            mostrarResultado("No puedes utilizar un número. Debes introducir una palabra.", "error");
            return;
        }

        /** - `resultado de la conversión y conteo` */
        const { mayusculas, totalLetras } = contarYMayusculas(palabra);

        mostrarResultado(
            `La palabra ha sido ${mayusculas} y tiene ${totalLetras} letras.`,
            "ok"
        );
    };


    //  -----  comprobar al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        comprobarPalabra();
    });


})();
