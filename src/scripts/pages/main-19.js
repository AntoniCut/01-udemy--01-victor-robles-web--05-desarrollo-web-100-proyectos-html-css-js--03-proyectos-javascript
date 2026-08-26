/*
    *  -----------------------------------------------------------  *
    *  -----  main-19.js  --  /src/scripts/pages/main-19.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 19 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLFormElement | null} - `formulario de creación` */
    const $form = /** @type {HTMLFormElement | null} */ (
        document.querySelector(".articulos__form")
    );

    /** @type {HTMLInputElement | null} - `campo del título` */
    const $title = /** @type {HTMLInputElement | null} */ (
        document.querySelector("#articulos-title")
    );

    /** @type {HTMLInputElement | null} - `campo del subtítulo` */
    const $subtitle = /** @type {HTMLInputElement | null} */ (
        document.querySelector("#articulos-subtitle")
    );

    /** @type {HTMLTextAreaElement | null} - `campo de la descripción` */
    const $description = /** @type {HTMLTextAreaElement | null} */ (
        document.querySelector("#articulos-description")
    );

    /** @type {HTMLDivElement | null} - `contenedor de artículos` */
    const $articlesGrid = /** @type {HTMLDivElement | null} */ (
        document.querySelector(".articulos__grid")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje de estado` */
    const $status = /** @type {HTMLParagraphElement | null} */ (
        document.querySelector(".articulos__status")
    );


    //  -----  validamos que los elementos necesarios existan  -----
    if (!$form || !$title || !$subtitle || !$description || !$articlesGrid || !$status) {
        throw new Error("No se han encontrado los elementos necesarios de los artículos.");
    }


    /** - `clave para guardar los artículos` */
    const STORAGE_KEY = "articlesJS19";

    /** @type {Article[]} - `artículos creados por el usuario` */
    let articles = [];


    /**
     * -------------------------
     * -----  `crearId()`  -----
     * -------------------------
     * - Genera un identificador único para un artículo.
     * @return {string} - Identificador único.
     */
    const crearId = () => crypto.randomUUID();


    /**
     * -------------------------------
     * -----  `leerArticulos()`  -----
     * -------------------------------
     * - Lee y valida los artículos guardados en localStorage.
     * @return {Article[]} - Artículos almacenados.
     */
    const leerArticulos = () => {
        
        
        const storedArticles = localStorage.getItem(STORAGE_KEY);

        if (!storedArticles) {
            return [];
        }


        try {
            const parsedArticles = /** @type {unknown} */ (JSON.parse(storedArticles));

            if (!Array.isArray(parsedArticles)) {
                return [];
            }

            return parsedArticles.flatMap((item) => {
                
                if (!item || typeof item !== "object") {
                    return [];
                }

                const article = /** @type {Partial<Article>} */ (item);

                if (
                    typeof article.title !== "string"
                    || typeof article.subtitle !== "string"
                    || typeof article.description !== "string"
                ) {
                    return [];
                }

                return [{
                    id: typeof article.id === "string" ? article.id : crearId(),
                    title: article.title,
                    subtitle: article.subtitle,
                    description: article.description,
                }];

            });

        }
        
        catch {
            return [];
        }

    };


    /**
     * ----------------------------------
     * -----  `guardarArticulos()`  -----
     * ----------------------------------
     * - Guarda los artículos actuales en localStorage.
     * @return {void}
     */
    const guardarArticulos = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    };


    /**
     * -----------------------------------------------
     * -----  `mostrarEstado(mensaje, esError)`  -----
     * -----------------------------------------------
     * - Muestra un mensaje visual para informar del resultado de una acción.
     * @param {string} mensaje - Texto que se mostrará.
     * @param {boolean} esError - Indica si el mensaje corresponde a un error.
     * @return {void}
     */
    const mostrarEstado = (mensaje, esError = false) => {
        $status.textContent = mensaje;
        $status.classList.toggle("articulos__status--error", esError);
    };


    /**
     * ------------------------------------
     * -----  `eliminarArticulo(id)`  -----
     * ------------------------------------
     * - Elimina un artículo del estado y de localStorage.
     * @param {string} id - Identificador del artículo que se eliminará.
     * @return {void}
     */
    const eliminarArticulo = (id) => {
        articles = articles.filter((article) => article.id !== id);
        guardarArticulos();
        mostrarArticulos();
        mostrarEstado("Artículo eliminado.");
    };


    /**
     * -------------------------------------
     * -----  `crearTarjeta(article)`  -----
     * -------------------------------------
     * - Crea una tarjeta semántica para representar un artículo.
     * @param {Article} article - Artículo que se mostrará.
     * @return {HTMLArticleElement} - Tarjeta creada.
     */
    const crearTarjeta = (article) => {
        
        
        const $card = document.createElement("article");
        
        $card.className = "articulos__card";


        const $header = document.createElement("header");
        
        $header.className = "articulos__card-header";


        const $author = document.createElement("p");
        
        $author.className = "articulos__author";
        $author.textContent = article.subtitle;
        $header.append($author);


        const $content = document.createElement("div");
        
        $content.className = "articulos__content";

        
        const $title = document.createElement("h3");
        
        $title.className = "articulos__card-title";
        $title.textContent = article.title;

        const $description = document.createElement("p");
        
        $description.className = "articulos__card-description";
        $description.textContent = article.description;
        $content.append($title, $description);


        const $deleteButton = document.createElement("button");
        
        $deleteButton.type = "button";
        $deleteButton.className = "articulos__delete-button";
        $deleteButton.textContent = "Eliminar tarjeta";
        $deleteButton.setAttribute("aria-label", `Eliminar artículo ${article.title}`);
        
        
        $deleteButton.addEventListener("click", () => {
            eliminarArticulo(article.id);
        });

        $card.append($header, $content, $deleteButton);
        
        return $card;

    };


    /**
     * ----------------------------------
     * -----  `mostrarArticulos()`  -----
     * ----------------------------------
     * - Renderiza todos los artículos almacenados en el grid.
     * @return {void}
     */
    const mostrarArticulos = () => {
        
        $articlesGrid.replaceChildren();

        if (articles.length === 0) {
            
            const $emptyMessage = document.createElement("p");
            
            $emptyMessage.className = "articulos__empty";
            $emptyMessage.textContent = "Todavía no hay artículos creados.";
            $articlesGrid.append($emptyMessage);
            
            return;
        }

        articles.forEach((article) => {
            $articlesGrid.append(crearTarjeta(article));
        });

    };



    //  -----  creación de artículos al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = $title.value.trim();
        const subtitle = $subtitle.value.trim();
        const description = $description.value.trim();

        if (!title || !subtitle || !description) {
            mostrarEstado("Completa todos los campos para crear el artículo.", true);
            return;
        }

        /** @type {Article} - `nuevo artículo` */
        const newArticle = {
            id: crearId(),
            title,
            subtitle,
            description,
        };

        articles = [newArticle, ...articles];
        guardarArticulos();
        mostrarArticulos();
        $form.reset();
        mostrarEstado("Artículo creado correctamente.");
    });


    articles = leerArticulos();
    mostrarArticulos();


})();
