/*
    *  -----------------------------------------------------------  *
    *  -----  main-28.js  --  /src/scripts/pages/main-28.js  -----  *
    *  -----------------------------------------------------------  *
*/

(() => {


    console.log("\n");
    console.warn("-----  Proyecto 28 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor independiente de la demo` */
    const $load = document.querySelector(".main__load");

    /** @type {HTMLPictureElement | null} - `Fondo con la imagen` */
    const $background = $load ? $load.querySelector(".load__background") : null;

    /** @type {HTMLParagraphElement | null} - `Porcentaje de carga` */
    const $number = $load ? $load.querySelector(".load__number") : null;

    /** @type {HTMLButtonElement | null} - `Botón para iniciar la carga` */
    const $btnLoad = $load ? $load.querySelector(".load__btn") : null;

    /** @type {HTMLParagraphElement | null} - `Mensaje de carga completada` */
    const $complete = $load ? $load.querySelector(".load__complete") : null;

    /** @type {HTMLButtonElement | null} - `Botón para reiniciar la carga` */
    const $btnReset = $load ? $load.querySelector(".load__btn-reset") : null;


    //  -----  verificación de elementos  -----
    if (!$load || !$background || !$number || !$btnLoad || !$complete || !$btnReset) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    //  -----  variables de carga  -----

    /** - `desenfoque inicial en pixeles` */
    const BLUR_INICIAL = 30;

    /** - `porcentaje de carga` */
    let percent = 1;

    /** - `desenfoque actual en pixeles` */
    let blur = BLUR_INICIAL;


    /**
     * ------------------------------
     * -----  `iniciarCarga()`  -----
     * ------------------------------
     * - Inicia la animación de carga y elimina el desenfoque de la imagen.
     * @return {void}
     */
    const iniciarCarga = () => {

        $btnLoad.style.display = "none";

        const interval = setInterval(() => {

            percent++;
            blur -= BLUR_INICIAL / 100;

            //  -----  si la carga ha terminado  -----
            if (percent > 100) {

                clearInterval(interval);
                $complete.style.display = "block";
                $btnReset.style.display = "block";

            } else {

                $number.textContent = percent + "%";
                $background.style.filter = `blur(${blur}px)`;
            }

        }, 20);

    };


    /**
     * -------------------------------
     * -----  `resetearCarga()`  -----
     * -------------------------------
     * - Restaura el estado inicial de la carga y el desenfoque de la imagen.
     * @return {void}
     */
    const resetearCarga = () => {

        percent = 1;
        blur = BLUR_INICIAL;

        $number.textContent = "0%";
        $background.style.filter = "";
        $complete.style.display = "none";
        $btnReset.style.display = "none";
        $btnLoad.style.display = "";

    };


    //  -----  click en cargar  -----
    $btnLoad.addEventListener("click", (event) => {
        event.preventDefault();
        iniciarCarga();
    });


    //  -----  click en reiniciar  -----
    $btnReset.addEventListener("click", (event) => {
        event.preventDefault();
        resetearCarga();
    });


})();
