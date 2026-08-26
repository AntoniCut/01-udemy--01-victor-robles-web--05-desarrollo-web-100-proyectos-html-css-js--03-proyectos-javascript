/*
    *  -----------------------------------------------------------  *
    *  -----  main-15.js  --  /src/scripts/pages/main-15.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 15 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de tarjetas` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__tarjetas")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLButtonElement | null} - `botón para añadir tarjetas` */
    const $addCard = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".tarjetas__add")
    );

    /** @type {HTMLDivElement | null} - `grid de tarjetas` */
    const $grid = /** @type {HTMLDivElement | null} */ (
        $demo.querySelector(".tarjetas__grid")
    );

    /** @type {NodeListOf<HTMLArticleElement>} - `tarjetas iniciales` */
    const $cards = /** @type {NodeListOf<HTMLArticleElement>} */ (
        $demo.querySelectorAll(".tarjetas__card")
    );


    //  -----  verificación de bloques  -----
    if (!$addCard || !$grid) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * -----------------------------------------
     * -----  `alternarEstilos(card)`  -----
     * -----------------------------------------
     * - Alterna el color de fondo de una tarjeta.
     * @param {HTMLArticleElement} card - Tarjeta que cambiará de color.
     * @return {void}
     */
    const alternarEstilos = (card) => {

        card.style.backgroundColor = card.style.backgroundColor === "red"
            ? "#0D6EFD"
            : "red";
    };


    /**
     * --------------------------------------
     * -----  `configurarTarjeta(card)`  -----
     * --------------------------------------
     * - Configura los eventos de una tarjeta.
     * @param {HTMLArticleElement} card - Tarjeta que se configurará.
     * @return {void}
     */
    const configurarTarjeta = (card) => {

        /** @type {HTMLButtonElement | null} - `botón de estilos` */
        const $styleButton = /** @type {HTMLButtonElement | null} */ (
            card.querySelector(".tarjetas__style-button")
        );

        /** @type {HTMLButtonElement | null} - `botón de eliminar` */
        const $deleteButton = /** @type {HTMLButtonElement | null} */ (
            card.querySelector(".tarjetas__delete-button")
        );


        if (!$styleButton || !$deleteButton) {
            return;
        }


        $styleButton.addEventListener("click", () => {
            alternarEstilos(card);
        });

        $deleteButton.addEventListener("click", () => {
            card.remove();
        });
    };


    /**
     * ------------------------------------
     * -----  `crearTarjeta(numero)`  -----
     * ------------------------------------
     * - Crea una nueva tarjeta completa con sus eventos.
     * @param {number} numero - Número de la tarjeta.
     * @return {HTMLArticleElement} - Tarjeta creada.
     */
    const crearTarjeta = (numero) => {

        const $card = document.createElement("article");
        const $header = document.createElement("header");
        const $author = document.createElement("p");
        const $content = document.createElement("div");
        const $title = document.createElement("h2");
        const $description = document.createElement("p");
        const $styleButton = document.createElement("button");
        const $deleteButton = document.createElement("button");

        $card.classList.add("tarjetas__card");
        $card.style.backgroundColor = "#0D6EFD";
        $header.classList.add("tarjetas__card-header");
        $author.classList.add("tarjetas__author");
        $content.classList.add("tarjetas__content");
        $title.classList.add("tarjetas__title");
        $description.classList.add("tarjetas__description");
        $styleButton.classList.add("tarjetas__style-button");
        $deleteButton.classList.add("tarjetas__delete-button");

        $author.textContent = "AntonyDev";
        $title.textContent = `Caja dinámica ${numero}`;
        $description.textContent = "Tarjeta creada dinámicamente con JavaScript.";
        $styleButton.type = "button";
        $styleButton.textContent = "Cambiar estilos";
        $deleteButton.type = "button";
        $deleteButton.textContent = "Eliminar tarjeta";

        $header.append($author);
        $content.append($title, $description);
        $card.append($header, $content, $styleButton, $deleteButton);
        configurarTarjeta($card);

        return $card;
    };


    $cards.forEach((card) => {
        configurarTarjeta(card);
    });


    /** @type {number} - `contador de tarjetas nuevas` */
    let contador = $cards.length + 1;


    //  -----  crear una tarjeta nueva  -----
    $addCard.addEventListener("click", () => {

        $grid.append(crearTarjeta(contador));
        contador++;
    });


})();
