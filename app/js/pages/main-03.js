/*
    *  -----------------------------------------------------------  *
    *  -----  main-03.js  --  /src/scripts/pages/main-03.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 3 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de velocidad` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__velocidad")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLParagraphElement | null} - `texto del límite de velocidad` */
    const $limite = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".velocidad__limite")
    );

    /** @type {HTMLFormElement | null} - `formulario de comprobación` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".velocidad__form")
    );

    /** @type {HTMLInputElement | null} - `campo de la velocidad del vehículo` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".velocidad__input")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje del resultado` */
    const $resultado = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".velocidad__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$limite || !$form || !$input || !$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        -------------------------------------------------------------
        -----  1. Velocidad del vehículo y límite de la vía  -----
        -------------------------------------------------------------
    */

    /** - `límite de velocidad en km/h` */
    const velocidadMaxima = 60;


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
        valor.className = "velocidad__valor";
        valor.textContent = texto;

        return valor;
    };


    /**
     * ------------------------------
     * -----  `pintarLimite()`  -----
     * ------------------------------
     * - Pinta el límite de velocidad en la demo.
     * @return {void}
     */
    const pintarLimite = () => {

        vaciarElemento($limite);

        $limite.appendChild(document.createTextNode("El límite de la vía es de "));
        $limite.appendChild(crearValor(String(velocidadMaxima)));
        $limite.appendChild(document.createTextNode(" km/h."));
    };


    /**
     * -----------------------------------------------
     * -----  `mostrarResultado(mensaje, tipo)`  -----
     * -----------------------------------------------
     * - Muestra el resultado de la comprobación en la demo.
     * @param {string} mensaje - Texto que verá el usuario.
     * @param {"alerta" | "ok" | "error"} tipo - Tipo visual del mensaje.
     * @return {void}
     */
    const mostrarResultado = (mensaje, tipo) => {

        vaciarElemento($resultado);

        $resultado.classList.remove(
            "velocidad__resultado--alerta",
            "velocidad__resultado--ok",
            "velocidad__resultado--error"
        );
        $resultado.classList.add(`velocidad__resultado--${tipo}`);
        $resultado.textContent = mensaje;
    };


    /**
     * ------------------------------------
     * -----  `comprobarVelocidad()`  -----
     * ------------------------------------
     * - Compara la velocidad del vehículo con el límite y muestra el aviso.
     * @return {void}
     */
    const comprobarVelocidad = () => {

        /** - `velocidad introducida por el usuario` */
        const velocidadVehiculo = Number($input.value);


        //  -----  validar que la velocidad sea un número válido  -----
        if (Number.isNaN(velocidadVehiculo) || velocidadVehiculo < 0) {
            mostrarResultado("Introduce una velocidad válida (0 o más).", "error");
            return;
        }


        //  -----  si la velocidad es mayor al límite  -----
        if (velocidadVehiculo > velocidadMaxima) {

            /** @type {string} - `aviso para bajar la velocidad` */
            const mensaje = `Baje la velocidad, vas a ${velocidadVehiculo} km/h.`;

            console.warn(mensaje);
            mostrarResultado(mensaje, "alerta");
            return;
        }


        //  -----  si la velocidad es menor o igual al límite  -----
        /** @type {string} - `aviso de que todo va bien` */
        const mensaje = `Velocidad correcta, vas a ${velocidadVehiculo} km/h.`;

        console.log(mensaje);
        mostrarResultado(mensaje, "ok");
    };


    //  -----  pintar el límite al cargar  -----
    pintarLimite();


    //  -----  comprobar al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        comprobarVelocidad();
    });


})();
