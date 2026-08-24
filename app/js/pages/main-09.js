/*
    *  -----------------------------------------------------------  *
    *  -----  main-09.js  --  /src/scripts/pages/main-09.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 9 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo suma aleatoria` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__suma-aleatoria")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLFormElement | null} - `formulario de generación` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".suma-aleatoria__form")
    );

    /** @type {HTMLInputElement | null} - `campo de cantidad` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".suma-aleatoria__input")
    );

    /** @type {HTMLHeadingElement | null} - `encabezado del resultado` */
    const $resultado = /** @type {HTMLHeadingElement | null} */ (
        $demo.querySelector(".suma-aleatoria__resultado")
    );

    /** @type {HTMLParagraphElement | null} - `párrafo con los números usados` */
    const $numeros = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".suma-aleatoria__numeros")
    );


    //  -----  verificación de bloques  -----
    if (!$form || !$input || !$resultado || !$numeros) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * ------------------------------------------------------------
     * -----  `generarNumerosAleatorios(cantidad, min, max)`  -----
     * ------------------------------------------------------------
     * - Genera un arreglo de números aleatorios enteros.
     * @param {number} cantidad - Cantidad de números a generar.
     * @param {number} min - Valor mínimo inclusive.
     * @param {number} max - Valor máximo inclusive.
     * @return {number[]} - Arreglo con números aleatorios.
     */
    const generarNumerosAleatorios = (cantidad, min, max) => (
        Array.from(
            { length: cantidad },
            () => Math.floor(Math.random() * (max - min + 1)) + min
        )
    );


    /**
     * -------------------------------------
     * -----  `mostrarError(mensaje)`  -----
     * -------------------------------------
     * - Muestra un mensaje de error en la demo.
     * @param {string} mensaje - Texto del error.
     * @return {void}
     */
    const mostrarError = (mensaje) => {

        $resultado.classList.remove("suma-aleatoria__resultado--ok");
        $resultado.classList.add("suma-aleatoria__resultado--error");
        $resultado.textContent = mensaje;
        $numeros.textContent = "";
    };


    /**
     * --------------------------------------
     * -----  `sumarTodos(...numeros)`  -----
     * --------------------------------------
     * - Suma todos los números dados y muestra resultados en pantalla y consola.
     * @param {...number} numeros - Lista de números a sumar.
     * @return {void}
     */
    const sumarTodos = (...numeros) => {

        /** - `suma total de los números` */
        const total = numeros.reduce((acumulado, numero) => acumulado + numero, 0);

        /** - `texto con el resultado` */
        const textoResultado = `El resultado es: ${total}`;

        /** - `texto con los números utilizados` */
        const textoNumeros = `Los números son: ${numeros.join(", ")}`;

        console.log(textoNumeros);
        console.log(textoResultado);

        $resultado.classList.remove("suma-aleatoria__resultado--error");
        $resultado.classList.add("suma-aleatoria__resultado--ok");
        $resultado.textContent = textoResultado;
        $numeros.textContent = textoNumeros;
    };


    /**
     * -------------------------------
     * -----  `generarYSumar()`  -----
     * -------------------------------
     * - Genera números aleatorios según la cantidad indicada y los suma.
     * @return {void}
     */
    const generarYSumar = () => {

        /** - `cantidad de números a generar` */
        const cantidad = Number($input.value);


        //  -----  validar que la cantidad sea un número válido  -----
        if (Number.isNaN(cantidad) || cantidad <= 0) {
            mostrarError("Introduce un número válido mayor que 0.");
            return;
        }


        /** - `números aleatorios generados` */
        const numerosAleatorios = generarNumerosAleatorios(cantidad, 1, 100);

        sumarTodos(...numerosAleatorios);
    };


    //  -----  generar y sumar al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        generarYSumar();
    });


})();
