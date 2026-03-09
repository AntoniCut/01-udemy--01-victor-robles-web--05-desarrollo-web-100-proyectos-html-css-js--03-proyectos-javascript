/*
    *  ------------------------------------------------------  *
    *  -----  /main-10.js  --  /src/scripts/main-10.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {

    
    console.log('\n');
    console.warn('-----  Proyecto 10 JS  -----');
    console.log('\n');


    /** 
     * @type {HTMLDivElement|null} 
     * */
    const resultBox = document.querySelector('#result');
    
    if (!resultBox) 
        return console.error('No se encontró el elemento #result');


    //  -----  Lógica del proyecto  -----   
    setTimeout(() => {


        /**
         * @type {string|null}  Input de palabra por parte del usuario.
         */
        const input = prompt('¿Introduce una palabra?', 'Hola Mundo!!!');

        //  -----  Validar entrada  -----
        if (!input || input.trim().length === 0) {
            alert('No has introducido ninguna palabra válida.');
            return;
        }

        //  -----  Validar si el valor introducido es un número  -----
        //  -----  (se considera número si todos los caracteres son dígitos o un número válido)  -----
        if (!isNaN(Number(input))) {
            alert('No puedes utilizar un número. Debes introducir una palabra.');
            return;
        }

        /**
         * `Convierte` una palabra a `mayúsculas` y `devuelve` su `conteo`.
         * @param {string} word - Palabra introducida.
         * @returns {string} HTML con la palabra y el número de letras.
         */
        const countAndUpperLetter = (word) => {
            
            //  -----  Convertir a mayúsculas  -----
            const upper = word.toUpperCase();
            
            //  -----  Contar letras  -----
            const counter = word.length;
            
            return `<h3> La palabra ha sido <strong> ${upper} </strong> y tiene ${counter} letras. </h3>`;
            
        };


        const resultHTML = countAndUpperLetter(input);
        
        resultBox.innerHTML = resultHTML;

        //  -----  Mostrar solo texto sin etiquetas  -----
        setTimeout(() => alert(resultHTML.replace(/<[^>]+>/g, '')), 2000); 


    }, 2000);


})();
