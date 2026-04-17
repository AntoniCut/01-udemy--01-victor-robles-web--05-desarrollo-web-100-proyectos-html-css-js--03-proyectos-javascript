/*
    *  ------------------------------------------------------  *
    *  -----  /main-15.js  --  /src/scripts/main-15.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 15 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {HTMLButtonElement|null} - botón para agregar una nueva tarjeta */
    const btnAddCard = document.querySelector("#btnAddCard");

    /** @type {NodeListOf<HTMLElement>} - listas de tarjetas */
    const cards = document.querySelectorAll(".layout__card");



    /**
     * ------------------------------
     * -----  `crearTarjeta()`  -----
     * -------------------------------
     * 
     * - Crea una nueva tarjeta completa con eventos.
     * @param {number} numero
     * @returns {HTMLArticleElement}
    */

    const crearTarjeta = (numero) => {


        /** @type {HTMLArticleElement} - article card */
        const card = document.createElement("article");

        card.classList.add("layout__card");
        card.style.backgroundColor = "#0D6EFD";


        // ----- Header -----

        /** @type {HTMLHeaderElement} - header of the card */
        const header = document.createElement("header");

        header.classList.add("card__header");

        /** @type {HTMLParagraphElement} - author of the card */
        const author = document.createElement("p");

        author.classList.add("header__author");
        author.textContent = "AntonyDev";

        // ----- Agregar el autor al header -----
        header.appendChild(author);


        // ----- Content -----

        /** @type {HTMLDivElement} - content of the card */
        const content = document.createElement("div");
        content.classList.add("card__content");


        /** @type {HTMLHeadingElement} - title of the card */
        const title = document.createElement("h2");

        title.classList.add("content__title");
        title.textContent = `Caja dinámica ${numero}`;


        /** @type {HTMLParagraphElement} - description of the card */
        const description = document.createElement("p");

        description.classList.add("content__description");
        description.textContent = "Tarjeta creada dinámicamente con JavaScript.";


        // ----- Agregar el título y la descripción al content -----
        content.appendChild(title);
        content.appendChild(description);


        /** @type {HTMLButtonElement} - button to change styles */
        const btnChangeEstilos = document.createElement("button");

        btnChangeEstilos.classList.add("content__btn");
        btnChangeEstilos.textContent = "Cambiar estilos";

        btnChangeEstilos.addEventListener("click", () => {

            // -----  Cambia el color de fondo a AZUL  -----
            if (card.style.backgroundColor === "red")
                card.style.backgroundColor = "#0D6EFD";

            // -----  Cambia el color de fondo a ROJO  -----
            else
                card.style.backgroundColor = "red";
        });


        // ----- Botón eliminar -----
        /** @type {HTMLButtonElement} - button to delete the card */
        const btnEliminar = document.createElement("button");

        btnEliminar.classList.add("delete__btn");
        btnEliminar.textContent = "Eliminar Tarjeta";

        btnEliminar.addEventListener("click", () => card.remove());

        // ----- Estructura final -----
        card.append(header);
        card.append(content);
        card.append(btnChangeEstilos);
        card.append(btnEliminar);

        return card;
    };



    //  -----  Recorrer cada tarjeta  -----
    cards.forEach(


        /** @param {HTMLArticleElement} card - article card */

        card => {

            //  -----  Seleccionar botón de cambiar estilos existente -----

            /** @type {HTMLButtonElement|null} */
            const btnChangeEstilos = card.querySelector(".content__btn");

            /** @type {HTMLButtonElement|null} */
            const btnEliminar = card.querySelector(".delete__btn");

            //  -----  Si no encuentra alguno de los botones, salir de la función  -----
            if (!btnChangeEstilos || !btnEliminar)
                return;


            //  -----  Evento para cambiar el color de la tarjeta -----
            btnChangeEstilos.addEventListener("click", () => {

                //  -----  Vuelve al color original (Azul)  -----
                if (card.style.backgroundColor === "red")
                    card.style.backgroundColor = "#0D6EFD";

                //  -----  Cambia a rojo  -----
                else
                    card.style.backgroundColor = "red";

            });

            //  -----  Evento para eliminar la tarjeta  -----
            btnEliminar?.addEventListener("click", () => card.remove());



        });



    //  -----  Contador para las nuevas tarjetas  -----
    let contador = cards.length + 1;

    //  -----  Evento para el botón de agregar nueva tarjeta  -----
    btnAddCard?.addEventListener("click", () => {

        //  -----  Crear una nueva tarjeta con el número del contador  -----
        const nuevaCard = crearTarjeta(contador++);

        //  -----  Agregar la nueva tarjeta al contenedor principal  -----
        document.querySelector(".main__container")?.appendChild(nuevaCard);

    });



})();
