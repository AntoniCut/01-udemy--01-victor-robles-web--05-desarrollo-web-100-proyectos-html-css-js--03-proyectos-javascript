/*
    *  ------------------------------------------------------  *
    *  -----  /main-11.js  --  /src/scripts/main-11.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 11 JS  -----');
    console.log('\n');


    //  -----  Referencia al HTML  -----

    /**
     * @type {HTMLDivElement|null}
     */
    const resultBox = document.querySelector('#result');

    if (!resultBox) 
        return console.error('No se encontró el elemento con el id "result".');


    //  -----  Retardo para simular carga de proyecto  -----
    setTimeout(() => {

        //  -----  Solicitar datos al usuario  -----
        
        /**
         * - `Solicitud` de una frase al usuario
         * @type {string|null}
         */
        const frase = prompt('Introduce una frase:');

        if (!frase) 
            return alert('No has introducido ninguna frase.');


        /**
         * - `Solicitud` de la palabra a reemplazar en la frase
         * @type {string|null}
         */
        const palabra = prompt(`En esta frase - "${frase}" - ¿Qué palabra quieres reemplazar?`);
        
        if (!palabra) 
            return alert('No has introducido ninguna palabra a reemplazar.');


        /**
         * - `Solicitud` de la palabra de reemplazo
         * @type {string|null}
         */
        const reemplazo = prompt(`Has elegido la palabra - "${palabra}" - ¿Por qué palabra la quieres sustituir?`);

        if (!reemplazo) 
            return alert('No has introducido ninguna palabra de reemplazo.');

              
        /**
         * - `Variable` para almacenar la frase final con el reemplazo
         * @type {string}
         */
        let fraseFinal = frase;
       
       
        /**
         * - `Función` para reemplazar la palabra en la frase
         * @param {string} frase - la frase completa
         * @param {string} palabra - la palabra a reemplazar en la frase
         * @param {string} reemplazo - la palabra que reemplazará a la original
         * @returns 
         */
        const reemplazar = (frase, palabra, reemplazo) => {

            //  -----  Verifica si la palabra está en la frase  -----
            if (frase.includes(palabra))
                return frase.replace(palabra, reemplazo);

            else
                return 'Esa palabra no existe en la frase.';
        };


        //  -----  Mostrar el resultado en un `alert` y en el HTML  -----
        fraseFinal = reemplazar(frase, palabra, reemplazo);
        
        
        //  -----  Mostrar el resultado en el DOM  -----
        resultBox.innerHTML += `

            La frase es: <h3> ${frase} </h3>
            La palabra a buscar es: <h3> ${palabra} </h3>
            La palabra a reemplazar es: <h3> ${reemplazo} </h3>
            La nueva frase es: <h3> ${fraseFinal} </h3>

        `;


        //  -----  Mostrar el resultado en un `alert` después de 2 segundos  -----
        setTimeout(() => alert('La nueva frase es: ' + fraseFinal), 2000);


    }, 2000);
  


})();
