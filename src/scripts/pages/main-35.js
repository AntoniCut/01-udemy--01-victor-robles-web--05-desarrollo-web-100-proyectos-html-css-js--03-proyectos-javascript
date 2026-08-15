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

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del curso` */
    const $course = document.querySelector(".demo__course");

    /** @type {HTMLHeadingElement | null} - `Título con efecto de escritura` */
    const $title = $course ? $course.querySelector(".course__title") : null;


    //  -----  verificación de elementos  -----
    if (!$course || !$title) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** - `texto completo del título` */
    const texto = "¡Bienvenido al Curso!";

    /** - `inicio del recorte del texto` */
    const letraInicio = 0;

    /** - `final del recorte del texto` */
    let letraFin = 1;

    /** - `intervalo entre cada letra (ms)` */
    const velocidad = 150;


    /**
     * --------------------------------
     * -----  `escribirTitulo()`  -----
     * --------------------------------
     * - Muestra el título letra a letra y vuelve a empezar al terminar.
     * @return {void}
     */
    const escribirTitulo = () => {

        setInterval(() => {

            $title.textContent = texto.slice(letraInicio, letraFin);
            letraFin++;

            //  -----  si se completó el texto, volver a empezar  -----
            if (letraFin > texto.length) {
                letraFin = 1;
            }

        }, velocidad);

    };


    escribirTitulo();


})();
