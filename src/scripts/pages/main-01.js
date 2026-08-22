/*
    *  -----------------------------------------------------------  *
    *  -----  main-01.js  --  /src/scripts/pages/main-01.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 1 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de datos` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__datos")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLParagraphElement | null} - `frase con los datos iniciales` */
    const $frase = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".datos__frase")
    );

    /** @type {HTMLUListElement | null} - `lista de conocimientos` */
    const $lista = /** @type {HTMLUListElement | null} */ (
        $demo.querySelector(".datos__lista")
    );

    /** @type {HTMLParagraphElement | null} - `frase con los datos actualizados` */
    const $actualizacion = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".datos__actualizacion")
    );


    //  -----  verificación de bloques  -----
    if (!$frase || !$lista || !$actualizacion) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        ----------------------------------------------------------------------------------------
        -----  1. Debes crear las variables: nombre, apellido, edad, pais y conocimientos  -----
        -----  esta ultima debe ser un array  --------------------------------------------------
        ----------------------------------------------------------------------------------------
    */

    /** - `nombre del usuario` */
    const nombre = "Antonio Francisco";

    /** - `apellidos del usuario` */
    const apellidos = "Cutillas Garcia";

    /** - `edad del usuario` */
    let edad = 49;

    /** - `país de residencia` */
    const pais = "España";

    /** @type {string[]} - `conocimientos del usuario` */
    const conocimientos = [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "React",
        "Astro",
    ];


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
        
        valor.className = "datos__valor";
        valor.textContent = texto;

        return valor;
    };


    /**
     * -----------------------------
     * -----  `pintarFrase()`  -----
     * -----------------------------
     * - Pinta la frase inicial con nombre, edad, país y conocimientos.
     * @return {void}
     */
    const pintarFrase = () => {

        vaciarElemento($frase);

        $frase.appendChild(document.createTextNode("Hola, soy "));
        $frase.appendChild(crearValor(`${nombre} ${apellidos}`));
        $frase.appendChild(document.createTextNode(" y tengo "));
        $frase.appendChild(crearValor(String(edad)));
        $frase.appendChild(document.createTextNode(" años. Soy de "));
        $frase.appendChild(crearValor(pais));
        $frase.appendChild(document.createTextNode(" y tengo los siguientes conocimientos:"));
    };


    /**
     * -----------------------------
     * -----  `pintarLista()`  -----
     * -----------------------------
     * - Pinta la lista de conocimientos en el HTML.
     * @return {void}
     */
    const pintarLista = () => {

        vaciarElemento($lista);

        conocimientos.forEach((conocimiento) => {

            const item = document.createElement("li");
            item.className = "datos__item";
            item.textContent = conocimiento;
            $lista.appendChild(item);
        });
    };


    /**
     * -------------------------------------
     * -----  `pintarActualizacion()`  -----
     * -------------------------------------
     * - Pinta la frase con la edad y el conocimiento nuevos.
     * @return {void}
     */
    const pintarActualizacion = () => {

        vaciarElemento($actualizacion);

        $actualizacion.appendChild(document.createTextNode("Hola, ahora mi edad es de "));
        $actualizacion.appendChild(crearValor(String(edad)));
        $actualizacion.appendChild(document.createTextNode(" años, y tengo un conocimiento más que es "));
        $actualizacion.appendChild(crearValor(conocimientos[conocimientos.length - 1]));
        $actualizacion.appendChild(document.createTextNode("."));
    };


    /*
        --------------------------------------------------------------------------
        -----  2. Muestra todos los valores de las variables por la consola  -----
        --------------------------------------------------------------------------
    */
    console.log(`

        Hola, soy ${nombre} ${apellidos} y tengo ${edad} años, soy de ${pais}
        y tengo los siguientes conocimientos:
        - ${conocimientos[0]}.
        - ${conocimientos[1]}.
        - ${conocimientos[2]}.
        - ${conocimientos[3]}.
        - ${conocimientos[4]}.
        - ${conocimientos[5]}.

    `);


    //  -----  mostrar en el html  -----
    pintarFrase();
    pintarLista();


    /*
        --------------------------------------------------------------------------------------
        -----  3. Después cambia el valor de la edad y añade un nuevo elemento al array  -----
        --------------------------------------------------------------------------------------
    */
    edad = 50;
    conocimientos.push("PHP");


    /*
        -----------------------------------------------------------
        -----  4. Muestra esos nuevos valores por la consola  -----
        -----------------------------------------------------------
    */
    console.log(`
        Hola, ahora mi edad es de ${edad} años,
        y tengo un conocimiento más que es ${conocimientos[conocimientos.length - 1]}.
    `);


    //  -----  mostrar la actualización en el html  -----
    pintarActualizacion();


})();
