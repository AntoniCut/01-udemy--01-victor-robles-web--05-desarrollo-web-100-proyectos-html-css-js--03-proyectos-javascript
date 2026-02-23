/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-08.js  --------------------------------
    ---------------------------------------------------------
*/



(() => {


    console.log('\n');
    console.warn('-----  Proyecto 8 JS  -----');
    console.log('\n');

    /**
     * Selecciona el contenedor de resultado en el HTML.
     * @type {HTMLDivElement | null}
     */
    const resultado = document.querySelector('#resultado');
    
    if (!resultado) 
        return;


    /**
     * `Determina si un número es par`.
     * @param {number} numero
     * @returns {boolean}
     */
    const esPar = (numero) => numero % 2 === 0;


    /**
     * Muestra el resultado (par o impar) en consola, alerta y HTML.
     * @param {number} numero - Número evaluado.
     * @param {string} parImpar - Texto: "par" o "impar".
     */
    const renderResultado = (numero, parImpar) => {
        
        //  -----  Resultado en consola  -----
        const result = `El número ${numero} es ${parImpar}`;
        console.log(result);

        //  -----  Resultado en alerta  -----
        setTimeout(() => alert(result), 2000);

        //  -----  Resultado en HTML  -----
        const h3 = document.createElement('h3');
        h3.textContent = result;
        resultado.appendChild(h3);

    };


    //  -----  Solicitar número al usuario  -----
    setTimeout(() => {
        
        const input = prompt('Introduce un número', '0');
        
        const numero = parseInt(input || '0', 10);

        if (isNaN(numero)) {
            alert('No has introducido un número válido.');
            return;
        }

        const parImpar = esPar(numero) ? 'par' : 'impar';
        renderResultado(numero, parImpar);

    }, 2000);

    
})();

