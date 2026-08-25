/*
    *  -----------------------------------------------------------  *
    *  -----  main-13.js  --  /src/scripts/pages/main-13.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 13 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del concesionario` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__concesionario")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLDivElement | null} - `contenedor de marcas y modelos` */
    const $resultado = /** @type {HTMLDivElement | null} */ (
        $demo.querySelector(".concesionario__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {ConcesionarioItem[]} - `marcas y modelos del concesionario` */
    const concesionario = [

        {
            marca: "Mercedes",
            modelos: ["Clase A", "Clase B", "Clase C"]
        },

        {
            marca: "Audi",
            modelos: ["A4", "A3", "Q3"]
        },

        {
            marca: "Renault",
            modelos: ["Clio", "Megane", "Captur"]
        }

    ];


    /**
     * -------------------------------------------
     * -----  `crearMarca(marca, modelos)`  -----
     * -------------------------------------------
     * - Crea un encabezado y una lista con los modelos de una marca.
     * @param {ConcesionarioItem} item - Marca y modelos disponibles.
     * @return {HTMLElement} - Bloque de la marca creado.
     */
    const crearMarca = ({ marca, modelos }) => {

        const $marca = document.createElement("section");
        const $titulo = document.createElement("h3");
        const $lista = document.createElement("ul");

        $marca.classList.add("concesionario__marca");
        $titulo.classList.add("concesionario__marca-title");
        $lista.classList.add("concesionario__modelos");
        $titulo.textContent = marca;

        modelos.forEach((modelo) => {

            const $modelo = document.createElement("li");

            $modelo.classList.add("concesionario__modelo");
            $modelo.textContent = `Modelo ${modelo}`;
            $lista.append($modelo);
        });

        $marca.append($titulo, $lista);

        return $marca;
    };


    /**
     * ----------------------------
     * -----  `mostrar(datos)`  -----
     * ----------------------------
     * - Recorre las marcas y muestra sus modelos en listas.
     * @param {ConcesionarioItem[]} datos - Datos del concesionario.
     * @return {void}
     */
    const mostrar = (datos) => {

        const $fragmento = document.createDocumentFragment();

        datos.forEach((item) => {

            console.log("Marca:", item.marca);
            console.log("Modelos:", item.modelos);
            $fragmento.append(crearMarca(item));
        });

        $resultado.replaceChildren($fragmento);
    };


    mostrar(concesionario);


})();
