/*
    *  -----------------------------------------------------------  *
    *  -----  main-02.js  --  /src/scripts/pages/main-02.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 2 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de coches` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__coches")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLParagraphElement | null} - `frase con marca, velocidad y stock` */
    const $frase = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".coches__frase")
    );

    /** @type {HTMLUListElement | null} - `lista de modelos` */
    const $lista = /** @type {HTMLUListElement | null} */ (
        $demo.querySelector(".coches__lista")
    );


    //  -----  verificación de bloques  -----
    if (!$frase || !$lista) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        -------------------------------------------------------------------------------------
        -----  1. Debes crear las variables: marca, velocidad, stock y modelos (array)  -----
        -------------------------------------------------------------------------------------
    */

    /** - `marca de los coches` */
    const marca = "Audi";

    /** - `velocidad máxima` */
    const velocidad = "250 Km/h";

    /** - `unidades en stock` */
    const stock = 349;

    /** @type {string[]} - `modelos disponibles` */
    const modelos = [
        "A3",
        "Q3",
        "A6",
        "Q8",
        "A1",
        "Q2",
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
        valor.className = "coches__valor";
        valor.textContent = texto;

        return valor;
    };


    /**
     * -----------------------------
     * -----  `pintarFrase()`  -----
     * -----------------------------
     * - Pinta la frase con marca, velocidad y stock.
     * @return {void}
     */
    const pintarFrase = () => {

        vaciarElemento($frase);

        $frase.appendChild(document.createTextNode("Tenemos coches de la marca "));
        $frase.appendChild(crearValor(marca));
        $frase.appendChild(document.createTextNode(", con una velocidad máxima de "));
        $frase.appendChild(crearValor(velocidad));
        $frase.appendChild(document.createTextNode(" y un stock de "));
        $frase.appendChild(crearValor(String(stock)));
        $frase.appendChild(document.createTextNode(" unidades."));
    };


    /**
     * -----------------------------
     * -----  `pintarLista()`  -----
     * -----------------------------
     * - Pinta todos los modelos del array sin escribirlos a mano.
     * @return {void}
     */
    const pintarLista = () => {

        vaciarElemento($lista);

        modelos.forEach((modelo) => {

            const item = document.createElement("li");
            item.className = "coches__item";
            item.textContent = modelo;
            $lista.appendChild(item);
        });
    };


    /*
        -------------------------------------------------------------------------------------------
        -----  2. Mostrar las variables por la pantalla (con una frase)  --------------------------
        -----  3. Mostrar todos los elementos del array (sin hacerlo manualmente)  ----------------
        -------------------------------------------------------------------------------------------
    */
    pintarFrase();
    pintarLista();


})();
