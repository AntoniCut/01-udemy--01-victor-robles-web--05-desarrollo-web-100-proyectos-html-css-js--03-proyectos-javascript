/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-13.js  --------------------------------
    ---------------------------------------------------------
*/


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 13 JS  -----');
    console.log('\n');




})();



//  -----  Referencias al HTML  -----
const cajaConcesionario = document.querySelector('#concesionario');



/**
 * Representa una marca y sus modelos en el concesionario.
 * @typedef {Object} ConcesionarioItem
 * @property {string} marca - Nombre de la marca de coches.
 * @property {string[]} modelos - Lista de modelos disponibles de esa marca.
 */

/**
 * Lista de marcas y modelos disponibles en el concesionario.
 * @type {ConcesionarioItem[]}
 */

const concesionario = [

    {
        marca: "Mercedes",
        modelos: ["clase A", "clase B", "clase C"]
    },

    {
        marca: "Audi",
        modelos: ["A4", "A3", "Q3"]
    },

    {
        marca: "Renault",
        modelos: ["Clio", "Megane", "Capture"]
    }

];


//  -----  Mostrar los datos en el DOM  -----
const mostrar = (datos) => {

    datos.forEach(({ marca, modelos }) => {   // ← desestructuramos cada coche
        
        console.log('marca', marca);

        //  -----  añadir marca en el DOM  -----
        cajaConcesionario.innerHTML += `<h3>${marca}</h3>`;

        //  -----  abrir lista -----
        cajaConcesionario.innerHTML += `<ul>`;

        //  -----  recorrer cada modelo -----
        modelos.forEach(modelo => {           // ← modelo directo
            
            console.log('modelo', modelo);
            cajaConcesionario.innerHTML += `<li>modelo ${modelo}</li>`;

        });

        //  -----  cerrar lista -----
        cajaConcesionario.innerHTML += `</ul><br>`;
        console.log('\n');
        
    });
}


mostrar(concesionario);



