/*
    *  -----------------------------------------------------------  *
    *  -----  main-14.js  --  /src/scripts/pages/main-14.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 14 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de sueldos` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__sueldos")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLFormElement | null} - `formulario de búsqueda` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".sueldos__form")
    );

    /** @type {HTMLInputElement | null} - `campo del sueldo del usuario` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".sueldos__input")
    );

    /** @type {HTMLDivElement | null} - `contenedor de resultados` */
    const $resultado = /** @type {HTMLDivElement | null} */ (
        $demo.querySelector(".sueldos__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$form || !$input || !$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {number[]} - `sueldos de los empleados` */
    const sueldos = [1050, 640, 750, 1500, 2200, 3011, 432];


    /**
     * -------------------------------------
     * -----  `mostrarError(mensaje)`  -----
     * -------------------------------------
     * - Muestra un mensaje de error en la demo.
     * @param {string} mensaje - Texto del error.
     * @return {void}
     */
    const mostrarError = (mensaje) => {

        $resultado.classList.remove("sueldos__resultado--ok");
        $resultado.classList.add("sueldos__resultado--error");
        $resultado.textContent = mensaje;
    };


    /**
     * ----------------------------------
     * -----  `crearSueldo(sueldo)`  -----
     * ----------------------------------
     * - Crea un elemento de lista para un sueldo.
     * @param {number} sueldo - Sueldo que se mostrará.
     * @return {HTMLLIElement} - Elemento de lista creado.
     */
    const crearSueldo = (sueldo) => {

        const $sueldo = document.createElement("li");

        $sueldo.textContent = `${sueldo} €`;

        return $sueldo;
    };


    /**
     * --------------------------------------------
     * -----  `buscarSueldos(salarios, sueldo)`  -----
     * --------------------------------------------
     * - Busca y ordena los sueldos iguales o mayores al indicado.
     * @param {number[]} salarios - Sueldos de los empleados.
     * @param {number} sueldo - Sueldo introducido por el usuario.
     * @return {void}
     */
    const buscarSueldos = (salarios, sueldo) => {

        if (!Number.isFinite(sueldo) || sueldo < 0) {
            mostrarError("Introduce un sueldo válido.");
            return;
        }


        /** @type {number[]} - `sueldos filtrados y ordenados` */
        const resultados = salarios
            .filter((salario) => salario >= sueldo)
            .sort((a, b) => a - b);

        const $titulo = document.createElement("h3");

        $titulo.classList.add("sueldos__resultado-title");
        $titulo.textContent = `Sueldos iguales o mayores a ${sueldo} €`;

        if (resultados.length === 0) {
            const $mensaje = document.createElement("p");

            $mensaje.classList.add("sueldos__resultado-message");
            $mensaje.textContent = "No hay sueldos mayores o iguales al tuyo.";
            $resultado.classList.remove("sueldos__resultado--error");
            $resultado.classList.add("sueldos__resultado--ok");
            $resultado.replaceChildren($titulo, $mensaje);
            return;
        }


        const $lista = document.createElement("ul");

        $lista.classList.add("sueldos__list");
        resultados.forEach((sueldoEncontrado) => {
            console.log(`Sueldo encontrado: ${sueldoEncontrado}`);
            $lista.append(crearSueldo(sueldoEncontrado));
        });

        $resultado.classList.remove("sueldos__resultado--error");
        $resultado.classList.add("sueldos__resultado--ok");
        $resultado.replaceChildren($titulo, $lista);
    };


    //  -----  buscar al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        buscarSueldos(sueldos, $input.valueAsNumber);
    });


})();
