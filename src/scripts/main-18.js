/*
    *  ------------------------------------------------------  *
    *  -----  /main-18.js  --  /src/scripts/main-18.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 18 JS  -----');
    console.log('\n');


    //  -----  Referencias a elementos del DOM  -----
    
    /** @type {HTMLSpanElement | null} - `elemento que muestra los minutos` */
    const cronoMin = document.querySelector(".crono__min");
        
    /** @type {HTMLSpanElement | null} - `elemento que muestra los segundos` */
    const cronoSec = document.querySelector(".crono__sec");
    
    /** @type {HTMLButtonElement | null} - `botón para iniciar el cronómetro` */
    const btnStart = document.querySelector('.layout__btn-start');

    /** @type {HTMLButtonElement | null} - `botón para detener el cronómetro` */
    const btnStop = document.querySelector('.layout__btn-stop');


    //  -----  Validamos que los elementos del DOM necesarios para el funcionamiento del cronómetro existan  -----
    if (!cronoMin || !cronoSec || !btnStart || !btnStop) {
        throw new Error("No se han podido encontrar los elementos del DOM necesarios para el funcionamiento del cronómetro.");
    }


    //  -----  Variables cuenta minutos y segundos  -----
    let minutes = 0;
    let secons = 0;
    
    
    /** @type {NodeJS.Timeout | null} - `intervalo del cronómetro` */
    let time = null;


        
    /**
     * -----------------------
     * -----  `start()`  -----
     * -----------------------
     * - Función para iniciar el cronómetro, actualiza los minutos y segundos cada segundo.
     */
    
    const start = () => {


        //  -----  inicializamos estilos  -----
        btnStart.style.opacity = '0.5';
        btnStop.style.backgroundColor = 'rgb(17, 14, 14)';
        btnStop.classList.remove('active-hover');
        btnStop.classList.add('disabled-hover');

        console.log('time', time);


        //  -----  Si el cronómetro no está corriendo, iniciamos el intervalo para actualizar minutos y segundos cada segundo  -----
        if (!time) {

            //  -----  actualizamos minutos y segundos cada segundo  -----
            time = setInterval(() => {

                secons++;

                if (secons === 60) {
                    minutes++;
                    secons = 0;
                }


                //  -----  actualizamos el DOM con los minutos y segundos formateados a dos dígitos  -----
                cronoSec.textContent = secons < 10 ? "0" + secons : secons.toString();
                cronoMin.textContent = minutes < 10 ? "0" + minutes : minutes.toString();


                //  -----  mostramos minutos y segundos por consola  -----
                console.log("minutes:", minutes, " secons:", secons, " time:", time);


                if (minutes === 1 && secons === 0) {
                    alert("Has excedido el tiempo limite de 60 minutos");
                    stop();
                    
                    if (time) {
                        clearInterval(time);
                    }
                    console.log('time', time);
                    
                    initCrono();
                }

            }, 1000);

        }

    }



    /**
     * -----------------------
     * -----  `stop()`  -----
     * -----------------------
     * - Función para detener el cronómetro, limpia el intervalo y resetea los estilos de los botones.
     */

    const stop = () => {

        //  -----  inicializamos estilos  -----
        btnStart.style.opacity = '1';
        btnStop.style.backgroundColor = '#cccccc';
        btnStop.classList.add('active-hover');

        //  -----  detenemos el cronómetro limpiando el intervalo  -----
        if (time) {
            clearInterval(time);
            time = null;
        }
    }


        
    /**
     * ---------------------------
     * -----  `initCrono()`  -----
     * ---------------------------
     * - Función para resetear el cronómetro, resetea los minutos y segundos a cero y actualiza el DOM.
     */

    const initCrono = () => {

        //  -----  inicializamos estilos  -----
        btnStop.classList.remove('disabled-hover');

        //  -----  reseteamos variables y DOM  -----
        secons = 0;
        minutes = 0;

        cronoSec.innerHTML = "00";
        cronoMin.innerHTML = "00";
    }


    //  -----  Evento Botón Iniciar  -----
    btnStart.addEventListener('click', () => start());


    //  -----  Evento Botón Stop  -----
    btnStop.addEventListener('click', () => stop());



})();
