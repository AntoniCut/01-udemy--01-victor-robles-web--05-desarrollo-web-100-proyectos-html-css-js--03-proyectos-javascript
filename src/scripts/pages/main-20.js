/*
    *  -----------------------------------------------------------  *
    *  -----  main-20.js  --  /src/scripts/pages/main-20.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 20 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLTimeElement | null} - `elemento que muestra la fecha` */
    const $date = /** @type {HTMLTimeElement | null} */ (
        document.querySelector(".date-hour__date")
    );

    /** @type {HTMLTimeElement | null} - `elemento que muestra la hora` */
    const $time = /** @type {HTMLTimeElement | null} */ (
        document.querySelector(".date-hour__time")
    );


    //  -----  validamos que los elementos necesarios existan  -----
    if (!$date || !$time) {
        throw new Error("No se han encontrado los elementos necesarios de fecha y hora.");
    }


    /**
     * -------------------------------------
     * -----  `formatearNumero(numero)`  -----
     * -------------------------------------
     * - Completa con un cero los números de una sola cifra.
     * @param {number} numero - Número que se formateará.
     * @return {string} - Número con dos cifras.
     */
    const formatearNumero = (numero) => String(numero).padStart(2, "0");


    /**
     * ---------------------------------------
     * -----  `actualizarFechaHora()`  -----
     * ---------------------------------------
     * - Actualiza la fecha y la hora mostradas en el DOM.
     * @return {void}
     */
    const actualizarFechaHora = () => {
        
        const currentDate = new Date();
        
        const day = formatearNumero(currentDate.getDate());
        const month = formatearNumero(currentDate.getMonth() + 1);
        const year = currentDate.getFullYear();
        
        const hours = formatearNumero(currentDate.getHours());
        const minutes = formatearNumero(currentDate.getMinutes());
        const seconds = formatearNumero(currentDate.getSeconds());

        $date.textContent = `${day}/${month}/${year}`;
        $date.dateTime = `${year}-${month}-${day}`;
        $time.textContent = `${hours}:${minutes}:${seconds}`;
        $time.dateTime = `T${hours}:${minutes}:${seconds}`;
    };


    actualizarFechaHora();
    window.setInterval(actualizarFechaHora, 1000);


})();
