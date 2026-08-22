/*
    *  -----------------------------------------------------------------  *
    *  -----  main-07-v1.js  --  /src/scripts/pages/main-07-v1.js  -----  *
    *  -----------------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 7 JS Version 1  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de edad` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__edad")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLParagraphElement | null} - `texto del año actual` */
    const $anioActual = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".edad__anio-actual")
    );

    /** @type {HTMLFormElement | null} - `formulario de cálculo de edad` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".edad__form")
    );

    /** @type {HTMLInputElement | null} - `campo del año de nacimiento` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".edad__input")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje del resultado` */
    const $resultado = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".edad__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$anioActual || !$form || !$input || !$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        -----------------------------------------------
        -----  1. Año actual y año mínimo válido  -----
        -----------------------------------------------
    */

    /** - `año actual del sistema` */
    const actualYear = new Date().getFullYear();

    /** - `año de nacimiento mínimo aceptado` */
    const anioMinimo = 1910;


    /**
     * ------------------------------------
     * -----  `vaciarElemento(nodo)`  -----
     * ------------------------------------
     * - Elimina todos los nodos hijos de un elemento.
     * @param {HTMLElement} nodo - Elemento que se va a vaciar.
     * @return {void}
     */
    const vaciarElemento = (nodo) => {

        while (nodo.firstChild) {
            nodo.removeChild(nodo.firstChild);
        }
    };


    /**
     * ---------------------------------
     * -----  `crearValor(texto)`  -----
     * ---------------------------------
     * - Crea un span con el valor destacado de un dato.
     * @param {string} texto - Texto que se mostrará destacado.
     * @return {HTMLSpanElement} - Span con la clase de valor.
     */
    const crearValor = (texto) => {

        const valor = document.createElement("span");
        valor.className = "edad__valor";
        valor.textContent = texto;

        return valor;
    };


    /**
     * ----------------------------------
     * -----  `pintarAnioActual()`  -----
     * ----------------------------------
     * - Pinta el año actual en la demo.
     * @return {void}
     */
    const pintarAnioActual = () => {

        vaciarElemento($anioActual);

        $anioActual.appendChild(document.createTextNode("Estamos en "));
        $anioActual.appendChild(crearValor(String(actualYear)));
        $anioActual.appendChild(document.createTextNode("."));
    };


    /**
     * -----------------------------------------------
     * -----  `mostrarResultado(mensaje, tipo)`  -----
     * -----------------------------------------------
     * - Muestra el resultado del cálculo de edad en la demo.
     * @param {string} mensaje - Texto que verá el usuario.
     * @param {"ok" | "error"} tipo - Tipo visual del mensaje.
     * @return {void}
     */
    const mostrarResultado = (mensaje, tipo) => {

        vaciarElemento($resultado);

        $resultado.classList.remove(
            "edad__resultado--ok",
            "edad__resultado--error"
        );
        $resultado.classList.add(`edad__resultado--${tipo}`);
        $resultado.textContent = mensaje;
    };


    /**
     * ------------------------------
     * -----  `calcularEdad()`  -----
     * ------------------------------
     * - Valida el año de nacimiento y muestra la edad actual.
     * @return {void}
     */
    const calcularEdad = () => {

        /** - `año de nacimiento introducido por el usuario` */
        const year = Number($input.value);


        //  -----  validar que el año sea un número válido  -----
        if (Number.isNaN(year)) {
            mostrarResultado("Introduce un año de nacimiento válido.", "error");
            return;
        }


        //  -----  si el año es menor de 1910, volver a pedirlo  -----
        if (year < anioMinimo) {
            mostrarResultado(`El año debe ser ${anioMinimo} o posterior. Vuelve a intentarlo.`, "error");
            $input.focus();
            return;
        }


        //  -----  si el año es posterior al actual  -----
        if (year > actualYear) {
            mostrarResultado(`El año no puede ser mayor que ${actualYear}. Vuelve a intentarlo.`, "error");
            $input.focus();
            return;
        }


        /** - `edad calculada con el año actual` */
        const result = actualYear - year;

        /** @type {string} - `frase con la edad del usuario` */
        const mensaje = `Tienes ${result} años.`;

        console.log(mensaje);
        mostrarResultado(mensaje, "ok");
    };


    //  -----  pintar el año actual al cargar  -----
    pintarAnioActual();


    //  -----  calcular al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        calcularEdad();
    });


})();
