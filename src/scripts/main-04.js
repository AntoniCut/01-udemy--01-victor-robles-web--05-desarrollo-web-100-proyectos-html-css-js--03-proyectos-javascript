/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-04.js  --------------------------------
    ---------------------------------------------------------
*/


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 4 JS  -----');
    console.log('\n');

    //  -----  referencia al HTML  -----

    /**
     * @type {HTMLDivElement|null}
     */
    const content = document.querySelector('#content');
    
    /**
     * @type {number}
     */
    let sueldo = 0;

    if (!content) 
        return;


    setTimeout(() => {

        do {
            
            sueldo = parseInt(prompt('¿Cuanto cobras?', '0') ?? '0');

        }while(isNaN(sueldo) || sueldo < 0);
        

        switch (true) {

            case sueldo <= 500:
                content.innerHTML = '<h3> Trabajas a media jornada </h3>';
                break;
            case sueldo <= 1000 && sueldo > 500:
                content.innerHTML = '<h3> Tienes el salario mínimo </h3>';
                break;
            case sueldo <= 1700 && sueldo > 1000:
                content.innerHTML = '<h3> Tienes un sueldo bueno </h3>';
                break;
            case sueldo > 1700:
                content.innerHTML = '<h3> Tienes un sueldo extraordinario </h3>';
                break;
            default:
                content.innerHTML = '<h3> Eres un estudiante, porque no tienes sueldo </h3>';

        };

    }, 2000);


})();
