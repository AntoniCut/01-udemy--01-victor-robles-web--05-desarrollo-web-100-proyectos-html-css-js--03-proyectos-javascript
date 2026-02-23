/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-07-v1.js  -----------------------------
    ---------------------------------------------------------
*/


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 7 JS Version 1  -----');
    console.log('\n');


    //  -----  referencia al HTML  -----

    /**
     * @type {HTMLDivElement|null}
     */
    const resultado = document.querySelector('#resultado');

    if(!resultado) 
        return console.error('No se encontro el elemento resultado');


    /**
     * @type {number}
     */
    const actualYear = new Date().getFullYear();
    
    /**
     * @type {number}
     */
    let year = 1990;
    let result = 0;


    setTimeout(() => {

        do {

            year = parseInt(prompt('¿En que año naciste?', '1990') ?? '1990');

        } while (year < 1910 || year > actualYear || isNaN(year));

        result = actualYear - year;
                
        resultado.innerHTML = `
            <h3> Tienes ${result} años </h3>
        `;

        setTimeout(() => {
            alert('tienes ' + result + ' años');
        }, 3000);


    }, 2000)



})();
