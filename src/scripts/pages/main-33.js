/*
    *  -----------------------------------------------------------  *
    *  -----  main-33.js  --  /src/scripts/pages/main-33.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 33 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `demo del banco con skeleton` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__bank")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo del banco.");
    }


    /** @type {HTMLParagraphElement | null} - `número de cuenta` */
    const $numberAccount = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".header__number")
    );

    /** @type {HTMLHeadingElement | null} - `saldo de la cuenta` */
    const $money = /** @type {HTMLHeadingElement | null} */ (
        $demo.querySelector(".header__money")
    );

    /** @type {NodeListOf<HTMLDivElement> | null} - `contenedores del icono` */
    const $containersIco = /** @type {NodeListOf<HTMLDivElement> | null} */ (
        $demo.querySelectorAll(".item__ico")
    );

    /** @type {NodeListOf<HTMLHeadingElement> | null} - `títulos de los movimientos` */
    const $titles = /** @type {NodeListOf<HTMLHeadingElement> | null} */ (
        $demo.querySelectorAll(".item__title")
    );

    /** @type {NodeListOf<HTMLParagraphElement> | null} - `fechas de los movimientos` */
    const $dates = /** @type {NodeListOf<HTMLParagraphElement> | null} */ (
        $demo.querySelectorAll(".item__date")
    );

    /** @type {NodeListOf<HTMLParagraphElement> | null} - `importes de los movimientos` */
    const $bills = /** @type {NodeListOf<HTMLParagraphElement> | null} */ (
        $demo.querySelectorAll(".item__bill")
    );

    /** @type {NodeListOf<HTMLParagraphElement> | null} - `totales de los movimientos` */
    const $totals = /** @type {NodeListOf<HTMLParagraphElement> | null} */ (
        $demo.querySelectorAll(".item__total")
    );

    /** @type {NodeListOf<HTMLElement> | null} - `elementos con animación de carga` */
    const $bgLoads = /** @type {NodeListOf<HTMLElement> | null} */ (
        $demo.querySelectorAll(".bank__load")
    );

    /** @type {NodeListOf<HTMLElement> | null} - `textos con animación de carga` */
    const $bgLoadsText = /** @type {NodeListOf<HTMLElement> | null} */ (
        $demo.querySelectorAll(".bank__load-text")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (
        !$numberAccount ||
        !$money ||
        !$containersIco ||
        $containersIco.length === 0 ||
        !$titles ||
        $titles.length === 0 ||
        !$dates ||
        $dates.length === 0 ||
        !$bills ||
        $bills.length === 0 ||
        !$totals ||
        $totals.length === 0 ||
        !$bgLoads ||
        $bgLoads.length === 0 ||
        !$bgLoadsText ||
        $bgLoadsText.length === 0
    ) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        *  -----------------------  *
        *  -----  Variables  -----  *
        *  -----------------------  *
    */

    /** - `indica si la carga ya se ejecutó` */
    let cargaIniciada = false;

    /** - `duración del skeleton en milisegundos` */
    const CARGA_MS = 3000;

    /** @type {number | null} - `identificador del temporizador de carga` */
    let timeoutId = null;


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * -----------------------------------
     * -----  `crearIconoTarjeta()`  -----
     * -----------------------------------
     * - Crea el icono de tarjeta de crédito para un movimiento.
     * @return {HTMLElement} - Icono de Font Awesome.
     */
    const crearIconoTarjeta = () => {

        /** @type {HTMLElement} - `icono de tarjeta de crédito` */
        const icono = document.createElement("i");
        icono.className = "fa-regular fa-credit-card";
        icono.setAttribute("aria-hidden", "true");

        return icono;
    };


    /**
     * -------------------------
     * -----  `setInfo()`  -----
     * -------------------------
     * - Rellena los datos de la cuenta y elimina el estado de carga.
     * @return {void}
     */
    const setInfo = () => {

        $numberAccount.textContent = "Q99 3231 43244 43287 09874 0047";
        $money.textContent = "5000 €";

        $containersIco.forEach((ico) => {
            ico.replaceChildren(crearIconoTarjeta());
        });

        $titles.forEach((title) => {
            title.textContent = "Empresa";
        });

        $dates.forEach((date) => {
            date.textContent = "20/06/2025";
        });

        $bills.forEach((bill) => {
            bill.textContent = "-400 €";
        });

        $totals.forEach((total) => {
            total.textContent = "5000 €";
        });

        $bgLoads.forEach((bgLoad) => {
            bgLoad.classList.remove("bank__load");
        });

        $bgLoadsText.forEach((bgLoadText) => {
            bgLoadText.classList.remove("bank__load-text");
        });
    };


    /**
     * ------------------------------
     * -----  `iniciarCarga()`  -----
     * ------------------------------
     * - Inicia el temporizador de 3 segundos y muestra los datos.
     * @return {void}
     */
    const iniciarCarga = () => {

        //  -----  evitar repetir la carga  -----
        if (cargaIniciada) {
            return;
        }

        cargaIniciada = true;
        timeoutId = window.setTimeout(setInfo, CARGA_MS);
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    /** @type {IntersectionObserver} - `observer para detectar cuando la demo es visible` */
    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            //  -----  si la demo es visible, iniciar la carga  -----
            if (entry.isIntersecting) {
                iniciarCarga();
                observer.disconnect();
            }

        });

    }, {
        threshold: 0.25,
    });


    //  -----  observamos la demo para iniciar la carga al hacer scroll  -----
    observer.observe($demo);


})();
