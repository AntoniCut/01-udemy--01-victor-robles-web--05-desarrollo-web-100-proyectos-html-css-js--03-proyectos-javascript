/*
    *  -----------------------------------------------------------  *
    *  -----  main-12.js  --  /src/scripts/pages/main-12.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 12 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de animales` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__animales")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLFormElement | null} - `formulario de animales` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".animales__form")
    );

    /** @type {HTMLInputElement | null} - `campo del animal` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".animales__input")
    );

    /** @type {HTMLButtonElement | null} - `botón para mostrar animales` */
    const $mostrar = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".animales__show")
    );

    /** @type {HTMLParagraphElement | null} - `estado de la colección` */
    const $status = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".animales__status")
    );

    /** @type {HTMLDivElement | null} - `contenedor de resultados` */
    const $resultado = /** @type {HTMLDivElement | null} */ (
        $demo.querySelector(".animales__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$form || !$input || !$mostrar || !$status || !$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {string[]} - `animales introducidos por el usuario` */
    const animales = [];


    /**
     * -------------------------------------
     * -----  `mostrarError(mensaje)`  -----
     * -------------------------------------
     * - Muestra un mensaje de error en la demo.
     * @param {string} mensaje - Texto del error.
     * @return {void}
     */
    const mostrarError = (mensaje) => {

        $status.classList.remove("animales__status--ok");
        $status.classList.add("animales__status--error");
        $status.textContent = mensaje;
    };


    /**
     * -----------------------------------------
     * -----  `crearParrafo(animal)`  -----
     * -----------------------------------------
     * - Crea un párrafo para un animal de la colección.
     * @param {string} animal - Nombre del animal.
     * @return {HTMLParagraphElement} - Párrafo creado.
     */
    const crearParrafo = (animal) => {

        const $parrafo = document.createElement("p");

        $parrafo.textContent = animal;

        return $parrafo;
    };


    /**
     * ------------------------------------------
     * -----  `recorrerMostrar(animales)`  -----
     * ------------------------------------------
     * - Recorre el array y muestra cada animal en un párrafo.
     * @param {string[]} animales - Array de animales.
     * @return {void}
     */
    const recorrerMostrar = (animales) => {

        const $fragmento = document.createDocumentFragment();

        animales.forEach((animal) => {
            $fragmento.append(crearParrafo(animal));
        });

        $resultado.replaceChildren($fragmento);
        $status.classList.remove("animales__status--error");
        $status.classList.add("animales__status--ok");
        $status.textContent = `Se han añadido ${animales.length} animales.`;
    };


    /**
     * --------------------------------------
     * -----  `anadirAnimal()`  -----
     * --------------------------------------
     * - Valida y añade un animal al array.
     * @return {void}
     */
    const anadirAnimal = () => {

        const animal = $input.value.trim();

        if (!animal) {
            mostrarError("Introduce un animal válido.");
            return;
        }

        if (Number.isFinite(Number(animal))) {
            mostrarError("No puedes añadir un número. Introduce el nombre de un animal.");
            return;
        }


        animales.push(animal);
        $input.value = "";
        $input.focus();
        $status.classList.remove("animales__status--error");
        $status.classList.add("animales__status--ok");
        $status.textContent = `Animal añadido. Hay ${animales.length} en la colección.`;
    };


    //  -----  añadir un animal al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        anadirAnimal();
    });


    //  -----  mostrar todos los animales de la colección  -----
    $mostrar.addEventListener("click", () => {

        if (animales.length === 0) {
            mostrarError("Añade al menos un animal para mostrar la colección.");
            return;
        }

        recorrerMostrar(animales);
    });


})();
