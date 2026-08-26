/*
    *  -----------------------------------------------------------  *
    *  -----  main-18.js  --  /src/scripts/pages/main-18.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 18 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSpanElement | null} - `elemento que muestra los minutos` */
    const $minutes = /** @type {HTMLSpanElement | null} */ (
        document.querySelector(".cronometro__minutes")
    );

    /** @type {HTMLSpanElement | null} - `elemento que muestra los segundos` */
    const $seconds = /** @type {HTMLSpanElement | null} */ (
        document.querySelector(".cronometro__seconds")
    );

    /** @type {HTMLSpanElement | null} - `elemento que muestra las milésimas` */
    const $milliseconds = /** @type {HTMLSpanElement | null} */ (
        document.querySelector(".cronometro__milliseconds")
    );

    /** @type {HTMLButtonElement | null} - `botón para iniciar el cronómetro` */
    const $startButton = /** @type {HTMLButtonElement | null} */ (
        document.querySelector(".cronometro__button--start")
    );

    /** @type {HTMLButtonElement | null} - `botón para detener el cronómetro` */
    const $stopButton = /** @type {HTMLButtonElement | null} */ (
        document.querySelector(".cronometro__button--stop")
    );

    /** @type {HTMLButtonElement | null} - `botón para reiniciar el cronómetro` */
    const $resetButton = /** @type {HTMLButtonElement | null} */ (
        document.querySelector(".cronometro__button--reset")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje de estado del cronómetro` */
    const $status = /** @type {HTMLParagraphElement | null} */ (
        document.querySelector(".cronometro__status")
    );


    //  -----  validamos que los elementos necesarios existan  -----
    if (!$minutes || !$seconds || !$milliseconds || !$startButton || !$stopButton || !$resetButton || !$status) {
        throw new Error("No se han encontrado los elementos necesarios del cronómetro.");
    }


    /** - `tiempo transcurrido en milisegundos` */
    let elapsedMilliseconds = 0;

    /** @type {number | null} - `identificador del intervalo` */
    let intervalId = null;

    /** @type {number} - `momento en el que comenzó el intervalo actual` */
    let startedAt = 0;

    /** - `tiempo máximo del cronómetro: 60 minutos en milisegundos` */
    const MAX_MILLISECONDS = 60 * 60 * 1000;


    /**
     * ------------------------------------------
     * -----  `actualizarDisplay()`  -----
     * ------------------------------------------
     * - Actualiza el tiempo mostrado con minutos, segundos y milésimas formateados.
     * @return {void}
     */
    const actualizarDisplay = () => {
        const minutes = Math.floor(elapsedMilliseconds / 60000);
        const seconds = Math.floor((elapsedMilliseconds % 60000) / 1000);
        const milliseconds = Math.floor((elapsedMilliseconds % 1000) / 10);

        $minutes.textContent = String(minutes).padStart(2, "0");
        $seconds.textContent = String(seconds).padStart(2, "0");
        $milliseconds.textContent = String(milliseconds).padStart(2, "0");
    };


    /**
     * -----------------------------------------------
     * -----  `actualizarEstadoBotones()`  -----
     * -----------------------------------------------
     * - Actualiza el estado visual y funcional de los botones.
     * @param {boolean} isRunning - Indica si el cronómetro está activo.
     * @return {void}
     */
    const actualizarEstadoBotones = (isRunning) => {
        $startButton.disabled = isRunning;
        $stopButton.disabled = !isRunning;
        $startButton.classList.toggle("cronometro__button--running", isRunning);
    };


    /**
     * ---------------------------------------------
     * -----  `detenerCronometro(mensaje)`  -----
     * ---------------------------------------------
     * - Detiene el intervalo y actualiza el mensaje de estado.
     * @param {string} mensaje - Mensaje que se mostrará al detenerse.
     * @return {void}
     */
    const detenerCronometro = (mensaje) => {
        if (intervalId !== null) {
            actualizarTiempo();
            window.clearInterval(intervalId);
            intervalId = null;
        }

        actualizarEstadoBotones(false);
        $status.textContent = mensaje;
    };


    /**
     * ------------------------------------
     * -----  `actualizarTiempo()`  -----
     * ------------------------------------
     * - Calcula el tiempo transcurrido y actualiza el display.
     * @return {void}
     */
    const actualizarTiempo = () => {
        elapsedMilliseconds = Math.min(
            MAX_MILLISECONDS,
            Math.floor(performance.now() - startedAt)
        );
        actualizarDisplay();
    };


    /**
     * ------------------------------------
     * -----  `iniciarCronometro()`  -----
     * ------------------------------------
     * - Inicia el cronómetro si no existe un intervalo activo.
     * @return {void}
     */
    const iniciarCronometro = () => {
        if (intervalId !== null) {
            return;
        }

        actualizarEstadoBotones(true);
        $status.textContent = "Cronómetro en marcha.";
        startedAt = performance.now() - elapsedMilliseconds;

        intervalId = window.setInterval(() => {
            actualizarTiempo();

            //  -----  detenemos el cronómetro al alcanzar los 60 minutos  -----
            if (elapsedMilliseconds >= MAX_MILLISECONDS) {
                detenerCronometro("Has alcanzado el límite de 60 minutos.");
            }
        }, 10);
    };


    /**
     * -------------------------------------
     * -----  `reiniciarCronometro()`  -----
     * -------------------------------------
     * - Detiene el cronómetro y restablece el tiempo a cero.
     * @return {void}
     */
    const reiniciarCronometro = () => {
        detenerCronometro("Cronómetro listo.");
        elapsedMilliseconds = 0;
        actualizarDisplay();
    };


    //  -----  evento del botón iniciar  -----
    $startButton.addEventListener("click", iniciarCronometro);


    //  -----  evento del botón parar  -----
    $stopButton.addEventListener("click", () => {
        detenerCronometro("Cronómetro detenido.");
    });


    //  -----  evento del botón reset  -----
    $resetButton.addEventListener("click", reiniciarCronometro);


    actualizarDisplay();
    actualizarEstadoBotones(false);


})();
