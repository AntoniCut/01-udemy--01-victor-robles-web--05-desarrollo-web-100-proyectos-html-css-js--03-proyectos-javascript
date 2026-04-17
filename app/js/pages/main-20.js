/*
    *  ------------------------------------------------------  *
    *  -----  /main-20.js  --  /src/scripts/main-20.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 20 JS  -----');
    console.log('\n');


      //  -----  Referencias al HTML  -----
    
    /** @type  {HTMLParagraphElement | null} - Fecha */
    const dateDom = document.querySelector(".main__date");
    
    
    /** @type  {HTMLParagraphElement | null} - Hora */
    const hourDom = document.querySelector(".main__hour");


    //  -----  Validación de elementos del DOM  -----
    if (!dateDom || !hourDom) 
        throw new Error('No se han encontrado los elementos del DOM');


    /**
     * ------------------------
     * -----  `myDate()`  -----
     * ------------------------
     * 
     * - `Función para mostrar la fecha y hora actual en el DOM`
     * 
     */

    const myDate = () => {

        /** `obtenemos la fecha y hora actual del objeto Date` */
        let date = new Date();
        
        /** `obtenemos el día actual` */
        let day = date.getDate();
        
        /** `obtenemos el mes actual` */
        let month = date.getMonth() + 1;
        
        /** `obtenemos el año actual` */
        let year = date.getFullYear();
        
        /** `obtenemos la hora actual` */
        let hour = date.getHours();
        
        /** `obtenemos los minutos actuales` */
        let minutes = date.getMinutes();
        
        /** `obtenemos los segundos actuales` */
        let secons = date.getSeconds();


        //  -----  Mostramos la fecha y hora actual por consola  -----
        console.log('day', day, ' - month', month, ' - year', year);
        console.log('hour', hour, ' - minutes', minutes, ' - secons', secons);
        

        /**
         * ------------------------
         * -----  `format()`  -----
         * ------------------------
         * 
         * - `Función para formatear un número a dos dígitos`
         * @param {number} num 
         * @returns {string}
         */

        const format = num => String(num).padStart(2, '0');


        /** `formateamos el día actual` */
        let dayStr = format(day);
        
        /** `formateamos el mes actual` */
        let monthStr = format(month);
        
        /** `formateamos la hora actual` */
        let hourStr = format(hour);
        
        /** `formateamos los minutos actuales` */
        let minutesStr = format(minutes);
        
        /** `formateamos los segundos actuales` */
        let seconsStr = format(secons);
        

        //  -----  Mostramos la fecha y hora actual en el DOM  -----
        dateDom.textContent = `${dayStr}/${monthStr}/${year}`;
        hourDom.textContent = `${hourStr}:${minutesStr}:${seconsStr}`;

    }


    //  -----  Ejecutamos la función `myDate()` por primera vez  -----
    myDate();


    //  -----  Ejecutamos la función `myDate()` cada segundo  -----
    setInterval(() => myDate(), 1000);


})();
