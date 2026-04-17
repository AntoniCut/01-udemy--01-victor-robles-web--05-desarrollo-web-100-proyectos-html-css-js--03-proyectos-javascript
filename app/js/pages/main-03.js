/*
    *  ------------------------------------------------------  *
    *  -----  /main-03.js  --  /src/scripts/main-03.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 3 JS  -----');
    console.log('\n');


    //  -----  referencia al HTML  -----

    /**
     * @type {HTMLDivElement|null}
     */
    const content = document.querySelector('#content');
    
    if (!content) 
        return;
    

    /** 
     *  @type {number}  
     */
    const velocidadMaxima = 60;

    /**
     * @type {number}
     */
    let velocidadVehiculo = 0;


    setTimeout(() => {
        
        do {
            
            velocidadVehiculo = parseInt(prompt('¿ A que velocidad vas?', '50') ?? '50');

        }while(isNaN(velocidadVehiculo) || velocidadVehiculo < 0);
        

        if (velocidadVehiculo > velocidadMaxima) {
            
            setTimeout(() => alert('Baje la Velocidad, vas a ' + velocidadVehiculo + ' km/h'), 1000);
            content.innerHTML = `<h3> Baje la velocidad, vas a ${velocidadVehiculo} km/h </h3>`;
        }

        else {
            setTimeout(() => alert('Velocidad Correcta, vas a ' + velocidadVehiculo + ' km/h'), 1000);
            content.innerHTML = `<h3> Velocidad correcta!!! </h3> vas a ${velocidadVehiculo} km/h`;
        }

    }, 2000);
    

})();
