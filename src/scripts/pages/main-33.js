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

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del banco` */
    const $bank = document.querySelector(".demo__bank");

    /** @type {HTMLParagraphElement | null} - `Número de cuenta` */
    const $numberAccount = $bank ? $bank.querySelector(".header__number") : null;

    /** @type {HTMLHeadingElement | null} - `Saldo de la cuenta` */
    const $money = $bank ? $bank.querySelector(".header__money") : null;

    /** @type {NodeListOf<HTMLDivElement> | null} - `Contenedores del icono` */
    const $containersIco = $bank ? $bank.querySelectorAll(".item__ico") : null;

    /** @type {NodeListOf<HTMLHeadingElement> | null} - `Títulos de los movimientos` */
    const $titles = $bank ? $bank.querySelectorAll(".item__title") : null;

    /** @type {NodeListOf<HTMLParagraphElement> | null} - `Fechas de los movimientos` */
    const $dates = $bank ? $bank.querySelectorAll(".item__date") : null;

    /** @type {NodeListOf<HTMLParagraphElement> | null} - `Importes de los movimientos` */
    const $bills = $bank ? $bank.querySelectorAll(".item__bill") : null;

    /** @type {NodeListOf<HTMLParagraphElement> | null} - `Totales de los movimientos` */
    const $totals = $bank ? $bank.querySelectorAll(".item__total") : null;

    /** @type {NodeListOf<HTMLElement> | null} - `Elementos con animación de carga` */
    const $bgLoads = $bank ? $bank.querySelectorAll(".bank__load") : null;

    /** @type {NodeListOf<HTMLElement> | null} - `Textos con animación de carga` */
    const $bgLoadsText = $bank ? $bank.querySelectorAll(".bank__load-text") : null;


    //  -----  verificación de elementos  -----
    if (
        !$bank ||
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


    /**
     * -----------------------------------
     * -----  `crearIconoTarjeta()`  -----
     * -----------------------------------
     * - Crea el icono de tarjeta de crédito para un movimiento.
     * @return {HTMLElement} - Icono de Font Awesome.
     */
    const crearIconoTarjeta = () => {

        /** - `icono de tarjeta de crédito` */
        const icono = document.createElement("i");
        
        icono.className = "fa-regular fa-credit-card";
        
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
     * --------------------------------------
     * -----  `iniciarCargaAlScroll()`  -----
     * --------------------------------------
     * - Observa la demo y arranca la carga al entrar en pantalla.
     * @return {void}
     */
    const iniciarCargaAlScroll = () => {

        /** - `indica si la carga ya se ejecutó` */
        let cargaIniciada = false;

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
            setTimeout(setInfo, 3000);

        };


        /** - `observer para detectar cuando la demo es visible` */
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

        observer.observe($bank);

    };


    iniciarCargaAlScroll();


})();
