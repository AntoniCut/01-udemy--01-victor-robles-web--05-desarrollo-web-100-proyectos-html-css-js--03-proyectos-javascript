/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-02.js  --------------------------------
    ---------------------------------------------------------
*/


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 2 JS  -----');
    console.log('\n');


    /*  
        ----------------------------------------------------------------------------
        -----  1. Crea un fichero JavaScript y vinculalo con tu fichero HTML   -----
        ----------------------------------------------------------------------------
    */

    setTimeout(() => {
        alert('Proyecto 2 JavaScript - Fichero Vinculado');
    }, 3000);


    /*  
        -------------------------------------------------------------------------------------
        -----  2. Debes crear las variables: marca, velocidad, stock y modelos (array)  -----
        -------------------------------------------------------------------------------------
    */
    let marca = 'Audi';
    let velocidad = '250 Km/h';
    let stock = 349;

    const modelos = [
        'A3',
        'Q3',
        'A6',
        'Q8',
        'A1',
        'Q2'
    ];


    /*  
        -------------------------------------------------------------------------------------------
        -----  3. Mostrar las variables por la pantalla (con una frase)  --------------------------
        -----  4. Mostrar todos los elementos del array (sin hacerlo manualmente) <ul> </ul>  -----
        -------------------------------------------------------------------------------------------
    */

    /**
     * @type {HTMLDivElement|null}
     */
    const content = document.querySelector('#content');

    if (!content) 
        return;

    content.innerHTML = `

        <h3> Tenemos coches de la marca... </h3>v
        <br>
        <p> Marca: <span> ${marca} </span> </p>
        <p> Velocidad: <span> ${velocidad} </span> </p>
        <p> Stock: <span> ${stock} </span> </p> 
        <br>
        
        <h3> Modelos disponibles: </h3>
        <ul>
            ${modelos.map(modelo => `<li> &nbsp; &nbsp; ${modelo} </li>`).join('')}
        </ul>
    `;


})();
