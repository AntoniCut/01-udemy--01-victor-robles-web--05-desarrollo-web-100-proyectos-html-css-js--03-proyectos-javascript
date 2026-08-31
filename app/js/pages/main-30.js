/*
    *  -----------------------------------------------------------  *
    *  -----  main-30.js  --  /src/scripts/pages/main-30.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 30 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `demo de contadores de redes sociales` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__socials")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo de redes sociales.");
    }


    /** @type {HTMLUListElement | null} - `lista de redes sociales` */
    const $socialsList = /** @type {HTMLUListElement | null} */ (
        $demo.querySelector(".socials__list")
    );

    /** @type {NodeListOf<HTMLSpanElement> | null} - `números de followers` */
    const $followers = /** @type {NodeListOf<HTMLSpanElement> | null} */ (
        $demo.querySelectorAll(".socials__number")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (!$socialsList || !$followers || $followers.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        *  -----------------------  *
        *  -----  Variables  -----  *
        *  -----------------------  *
    */

    /** @type {Map<HTMLSpanElement, number>} - `intervalos activos por contador` */
    const intervalosActivos = new Map();


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * ----------------------------------
     * -----  `detenerContadores()`  -----
     * ----------------------------------
     * - Detiene las animaciones y reinicia los contadores a cero.
     * @return {void}
     */
    const detenerContadores = () => {

        intervalosActivos.forEach((intervalId) => {
            window.clearInterval(intervalId);
        });

        intervalosActivos.clear();

        $followers.forEach((number) => {
            number.textContent = "0";
        });
    };


    /**
     * --------------------------------------
     * -----  `animarContador(number)`  -----
     * --------------------------------------
     * - Anima el contador desde 0 hasta el valor objetivo.
     * @param {HTMLSpanElement} number - El elemento que muestra el número.
     * @return {void}
     */
    const animarContador = (number) => {

        /** @type {number} - `valor objetivo de followers` */
        const max = Number.parseInt(number.dataset.target ?? "0", 10);

        //  -----  si el objetivo no es válido, salir  -----
        if (Number.isNaN(max) || max <= 0) {
            return;
        }

        /** @type {number | undefined} - `intervalo previo del contador` */
        const intervaloPrevio = intervalosActivos.get(number);

        //  -----  si ya había una animación, la detenemos  -----
        if (intervaloPrevio !== undefined) {
            window.clearInterval(intervaloPrevio);
        }

        /** - `valor actual del contador` */
        let actual = 0;

        /** - `incremento por tick de la animación` */
        const increment = Math.ceil(max / 100);

        number.textContent = "0";

        const intervalId = window.setInterval(() => {

            actual = Math.min(actual + increment, max);
            number.textContent = String(actual);

            //  -----  si se alcanzó el objetivo, detener  -----
            if (actual >= max) {
                window.clearInterval(intervalId);
                intervalosActivos.delete(number);
            }

        }, 50);

        intervalosActivos.set(number, intervalId);
    };


    /**
     * -----------------------------------
     * -----  `iniciarContadores()`  -----
     * -----------------------------------
     * - Anima todos los contadores de followers.
     * @return {void}
     */
    const iniciarContadores = () => {

        detenerContadores();

        $followers.forEach((number) => {
            animarContador(number);
        });
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    /** @type {IntersectionObserver} - `observer para detectar cuando la lista es visible` */
    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            //  -----  si la lista entra en pantalla, iniciar contadores  -----
            if (entry.isIntersecting) {
                iniciarContadores();
                return;
            }

            //  -----  si la lista sale de pantalla, reiniciar contadores  -----
            detenerContadores();

        });

    }, {
        threshold: 0.25,
    });


    //  -----  observamos la lista para animar cada vez que entre en pantalla  -----
    observer.observe($socialsList);


})();
