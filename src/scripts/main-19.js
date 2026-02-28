/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-19.js  --------------------------------
    ---------------------------------------------------------
*/



/**
 * - definición del tipo `Article` para describir la estructura de un artículo.
 * - Array de artículos que se utilizará para almacenar los artículos creados por el usuario.
 * 
 * @typedef {Object} Article
 * @property {string} title - Título del artículo
 * @property {string} subtitle - Subtítulo del artículo
 * @property {string} description - Descripción del artículo
 */



(() => {


    console.log('\n');
    console.warn('-----  Proyecto 19 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {HTMLArticleElement | null} - `contenedor de artículos` */
    const articlesCard = document.querySelector(".layout__articles");

    /** @type {HTMLInputElement | null} - `input del título` */
    const title = document.querySelector("#title");

    /** @type {HTMLInputElement | null} - `input del subtítulo` */
    const subtitle = document.querySelector("#subtitle");

    /** @type {HTMLTextAreaElement | null} - `input de la descripción` */
    const description = document.querySelector("#description");

    /** @type {HTMLFormElement | null} - `formulario de creación` */
    const form = document.querySelector(".form__create");


    //  -----  validación de las referencias al HTML  -----
    if (!articlesCard || !title || !subtitle || !description || !form)
        throw new Error("No se han podido obtener las referencias del HTML");


    //  -----  array donde insertamos los artículos  -----


    /** @type {Article[]} - Array de artículos */
    let articles = [];


   
    /**
     * -------------------------------
     * -----  `createArticle()`  -----
     * -------------------------------
     * 
     * - crear un nuevo artículo a partir de los datos ingresados en el formulario.
     */

    const createArticle = () => {

        //  -----  al enviar el formulário  -----
        form?.addEventListener('submit', event => {

            event.preventDefault();

            if (title.value && subtitle.value && description.value) {

                //  -----  crear un nuevo artículo a partir de los datos ingresados en el formulario  -----
                const article = {
                    title: title.value,
                    subtitle: subtitle.value,
                    description: description.value
                };

                //  -----  insertar el nuevo artículo en el array de artículos y almacenarlo en el localStorage  -----
                articles.push(article);
                localStorage.setItem('articles', JSON.stringify(articles));
                
                //  -----  invertir el orden de los artículos para mostrar el más reciente primero  -----
                articles.reverse();

                //  -----  mostrar los artículos en el DOM  -----
                showArticles();
                
                //  -----  resetear el formulario  -----
                form.reset();
            }

            else {
                alert("Faltan datos por rellenar en el formulário");
            }

            console.log(articles);

        });

    }


    
    /**
     * --------------------------------
     * -----  `layoutArticles()`  -----
     * --------------------------------
     * 
     * - función que recibe un artículo y devuelve una plantilla HTML con el formato del artículo para mostrar en el DOM.
     * 
     * @param {Article} article 
     * @returns {string} - HTML del artículo
     */

    const layoutArticles = (article) => {

        const layout = `
        
            <!-- -----  Plantilla del artículo  ----- -->
            <article class="layout__card">

                <header class="card__header">
                    <p class="card__author"> ${article.subtitle} </p>
                </header>

                <div class="card__content">
                    <h2 class="content__title"> ${article.title} </h2>
                    <p class="content__description">
                        ${article.description}
                    </p>
                </div>

                <button class="content__btn"> Leer más </button>

            </article>

        `;

        return layout;

    }


   
    /**
     * --------------------------------
     * -----  `showArticles()`  -----
     * --------------------------------
     * 
     * - función que muestra los artículos almacenados en el array `articles` en el DOM 
     *   utilizando la plantilla de formato del artículo definida en la función `layoutArticles()`.  
     */
    
    const showArticles = () => {

        //  -----  limpiar el contenedor de artículos antes de mostrar los artículos almacenados en el array `articles`  -----
        articlesCard.innerHTML = '';

        //  -----  obtener los artículos almacenados en el localStorage, invertir el orden de los artículos para mostrar el más reciente primero y mostrar los artículos en el DOM  -----
        articles = JSON.parse(localStorage.getItem('articles') || '[]');
        
        //  -----  invertir el orden de los artículos para mostrar el más reciente primero  -----
        articles.reverse();

        //  -----  Si hay artículos almacenados en el array `articles`, mostrar los artículos en el DOM utilizando la plantilla de formato del artículo definida en la función `layoutArticles()`  -----
        if (articles.length > 0) {

            //  -----  mostrar los artículos en el DOM utilizando la plantilla de formato del artículo definida en la función `layoutArticles()`  -----
            articles.forEach(article => {

                articlesCard.innerHTML += layoutArticles(article);
            });
        }

    }

    

    //  -----  ejecutar las funciones para crear y mostrar los artículos  -----
    //  -----  al cargar la página  -----
    createArticle();
    showArticles();


})();
