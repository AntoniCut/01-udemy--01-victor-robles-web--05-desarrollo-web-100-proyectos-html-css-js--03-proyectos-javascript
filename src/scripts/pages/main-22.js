/*
    *  -----------------------------------------------------------  *
    *  -----  main-22.js  --  /src/scripts/pages/main-22.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 22 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `demo del buscador` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__buscador")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo del buscador.");
    }


    /** @type {HTMLTextAreaElement | null} - `texto donde se buscará` */
    const $editor = /** @type {HTMLTextAreaElement | null} */ (
        $demo.querySelector(".buscador__editor")
    );

    /** @type {HTMLInputElement | null} - `campo de búsqueda` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".buscador__input")
    );

    /** @type {HTMLParagraphElement | null} - `resultado con las palabras marcadas` */
    const $resultado = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".buscador__resultado")
    );

    /** @type {HTMLButtonElement | null} - `botón para borrar el texto` */
    const $borrar = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".buscador__borrar")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (!$input || !$editor || !$resultado || !$borrar) {
        throw new Error("No se han encontrado los elementos necesarios del buscador.");
    }



    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * ------------------------------------
     * -----  `escaparRegExp(texto)`  -----
     * ------------------------------------
     * - Escapa los caracteres especiales de una expresión regular.
     * @param {string} texto - Texto que se usará como patrón.
     * @return {string} - Texto escapado.
     */
    const escaparRegExp = (texto) => texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");


    /**
     * ----------------------------------------
     * -----  `vaciarElemento(elemento)`  -----
     * ----------------------------------------
     * - Elimina todos los hijos de un elemento.
     * @param {HTMLElement} elemento - Elemento que se vaciará.
     * @return {void}
     */
    const vaciarElemento = (elemento) => {

        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    };


    /**
     * -----------------------------------------------
     * -----  `pintarResultado(texto, termino)`  -----
     * -----------------------------------------------
     * - Pinta el texto y marca las coincidencias del término buscado.
     * @param {string} texto - Texto base donde se buscará.
     * @param {string} termino - Palabra que se quiere resaltar.
     * @return {void}
     */
    const pintarResultado = (texto, termino) => {

        vaciarElemento($resultado);

        /** @type {string} - `término limpio` */
        const busqueda = termino.trim();

        //  -----  si no hay término, mostrar el texto sin marcas  -----
        if (busqueda === "") {
            $resultado.appendChild(document.createTextNode(texto));
            return;
        }

        /** @type {RegExp} - `patrón global e insensible a mayúsculas` */
        const regExp = new RegExp(escaparRegExp(busqueda), "gi");

        /** - `posición ya pintada del texto` */
        let ultimoIndice = 0;

        /** @type {RegExpExecArray | null} - `coincidencia actual` */
        let coincidencia = regExp.exec(texto);

        //  -----  recorrer todas las coincidencias  -----
        while (coincidencia) {

            //  -----  pintar el texto anterior a la coincidencia  -----
            if (coincidencia.index > ultimoIndice) {
                $resultado.appendChild(
                    document.createTextNode(texto.slice(ultimoIndice, coincidencia.index))
                );
            }

            /** @type {HTMLElement} - `marca de la palabra encontrada` */
            const marca = document.createElement("mark");
            
            marca.className = "buscador__mark";
            marca.textContent = coincidencia[0];
            
            $resultado.appendChild(marca);

            ultimoIndice = coincidencia.index + coincidencia[0].length;

            //  -----  evitar un bucle infinito con coincidencias vacías  -----
            if (coincidencia[0].length === 0) {
                regExp.lastIndex += 1;
            }

            coincidencia = regExp.exec(texto);
        }

        //  -----  pintar el resto del texto  -----
        if (ultimoIndice < texto.length) {
            $resultado.appendChild(document.createTextNode(texto.slice(ultimoIndice)));
        }

    };



    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */


    //  -----  buscar al pulsar enter  -----
    $input.addEventListener("keydown", (event) => {

        //  -----  ignorar cualquier tecla que no sea enter  -----
        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();
        pintarResultado($editor.value, $input.value);
    });


    //  -----  restaurar el texto si se borra la búsqueda  -----
    $input.addEventListener("input", () => {

        //  -----  si el campo queda vacío, quitar las marcas  -----
        if ($input.value.trim() === "") {
            pintarResultado($editor.value, "");
        }
    });


    //  -----  actualizar el resultado al editar el texto  -----
    $editor.addEventListener("input", () => {
        pintarResultado($editor.value, $input.value);
    });


    //  -----  borrar el texto del editor  -----
    $borrar.addEventListener("click", (event) => {
        event.preventDefault();
        $editor.value = "";
        $editor.focus();
        pintarResultado("", $input.value);
    });


})();
