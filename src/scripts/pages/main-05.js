/*
    *  -----------------------------------------------------------  *
    *  -----  main-05.js  --  /src/scripts/pages/main-05.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 5 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de tablas` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__tablas")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * ---------------------------------------------
     * -----  `crearOperacion(tabla, factor)`  -----
     * ---------------------------------------------
     * - Crea una fila con una operación de la tabla de multiplicar.
     * @param {number} tabla - Número de la tabla.
     * @param {number} factor - Multiplicador de la operación.
     * @return {HTMLLIElement} - Elemento de la operación.
     */
    const crearOperacion = (tabla, factor) => {

        /** @type {HTMLLIElement} - `Elemento de la operación` */
        const operacion = document.createElement("li");
        
        operacion.className = "tablas__operacion";
        operacion.textContent = `${tabla} X ${factor} = ${tabla * factor}`;

        return operacion;
    };


    /**
     * ----------------------------------
     * -----  `crearTabla(numero)`  -----
     * ----------------------------------
     * - Crea la tarjeta de una tabla de multiplicar del 1 al 10.
     * @param {number} numero - Número de la tabla.
     * @return {HTMLElement} - Artículo con título y operaciones.
     */
    const crearTabla = (numero) => {

        /** @type {HTMLArticleElement} - `Artículo con título y operaciones` */
        const item = document.createElement("article");
        
        item.className = "tablas__item";

        
        /** @type {HTMLHeadingElement} - `Título de la tabla` */
        const titulo = document.createElement("h2");
        
        titulo.className = "tablas__title";
        titulo.textContent = `Tabla del ${numero}`;
        item.appendChild(titulo);


        /** @type {HTMLDivElement} - `Caja con las operaciones` */
        const caja = document.createElement("div");
        
        caja.className = "tablas__box";


        /** @type {HTMLUListElement} - `Lista de operaciones` */
        const lista = document.createElement("ul");
        
        lista.className = "tablas__list";


        /** @type {DocumentFragment} - `Fragmento de documentos` */
        const fragmento = document.createDocumentFragment();

        //  -----  bucle para crear las operaciones de la tabla  -----
        for (let factor = 1; factor <= 10; factor++) {
            fragmento.appendChild(crearOperacion(numero, factor));
        }

        lista.appendChild(fragmento);
        caja.appendChild(lista);
        item.appendChild(caja);

        return item;
    };


    /**
     * --------------------------------
     * -----  `crearSeparador()`  -----
     * --------------------------------
     * - Crea la línea que separa las dos filas de tablas.
     * @return {HTMLHRElement} - Separador horizontal.
     */
    const crearSeparador = () => {

        
        /** @type {HTMLHRElement} - `Separador horizontal` */
        const separador = document.createElement("hr");
        
        separador.className = "tablas__separator";

        return separador;
    };

    

    //  -----  pintar las tablas del 1 al 10  -----
    for (let numero = 1; numero <= 10; numero++) {

        $demo.appendChild(crearTabla(numero));

        //  -----  separar la primera fila (1-5) de la segunda (6-10)  -----
        if (numero === 5) {
            $demo.appendChild(crearSeparador());
        }
    }


})();
