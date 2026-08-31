/*
    *  -----------------------------------------------------------  *
    *  -----  main-35.js  --  /src/scripts/pages/main-35.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 35 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `demo del widget del curso` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__course")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo del curso.");
    }


    /** @type {HTMLHeadingElement | null} - `título con efecto de escritura` */
    const $title = /** @type {HTMLHeadingElement | null} */ (
        $demo.querySelector(".course__title")
    );


    //  -----  validamos que exista el título  -----
    if (!$title) {
        throw new Error("No se ha encontrado el título del curso.");
    }


    /*
        *  -----------------------  *
        *  -----  Variables  -----  *
        *  -----------------------  *
    */

    /** - `texto completo del título` */
    const texto = "¡Bienvenido al Curso!";

    /** - `final del recorte del texto` */
    let letraFin = 1;

    /** - `intervalo entre cada letra en milisegundos` */
    const velocidad = 150;

    /** @type {number | null} - `identificador del intervalo de escritura` */
    let intervalId = null;


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * --------------------------------
     * -----  `escribirTitulo()`  -----
     * --------------------------------
     * - Muestra el título letra a letra y vuelve a empezar al terminar.
     * @return {void}
     */
    const escribirTitulo = () => {

        if (intervalId !== null) {
            window.clearInterval(intervalId);
        }

        intervalId = window.setInterval(() => {

            $title.textContent = texto.slice(0, letraFin);
            letraFin++;

            //  -----  si se completó el texto, volver a empezar  -----
            if (letraFin > texto.length) {
                letraFin = 1;
            }

        }, velocidad);
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  iniciar el efecto de escritura al cargar la demo  -----
    escribirTitulo();


})();
