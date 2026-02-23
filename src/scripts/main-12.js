/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-12.js  --------------------------------
    ---------------------------------------------------------
*/


//@ts-check


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 12 JS  -----');
    console.log('\n');


    setTimeout(() => {


        //  -----  Referencias al HTML  -----
        
        /**
         * @type {HTMLDivElement|null}
         */
        const resultBox = document.querySelector('#result');
        
        if (!resultBox) 
            return;


        
        /**
         *  - Array de animales
         * @type {String[]}   
         */
        const animales = [];


        do {
            
            const animal = prompt('Introduce un animal - SALIR: Cancelar o vacio ', 'gato');

            //  -----  Si el usuario cancela o deja vacío, salir del bucle  -----
            if (!animal) break;

            animales.push(animal);

        } while (animales);


        /**
         * -----  Función para recorrer y mostrar los animales -----
         * @function recorrerMostrar
         * @param {String[]} animales 
         * @returns {void} 
         */
        
        const recorrerMostrar = animales => animales.forEach(animal => resultBox.innerHTML += `<p> ${animal} </p>`);


        //  -----  Llamar a la función -----
        recorrerMostrar(animales);


    }, 2000);


})();
