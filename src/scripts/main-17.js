/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-17.js  --------------------------------
    ---------------------------------------------------------
*/


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 17 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----


     /** @type {NodeListOf<HTMLElement>} - listas de tarjetas */
    const cards = document.querySelectorAll(".layout__card");
    

    //  -----  recorrer cada tarjeta para agregar eventos  -----
    cards.forEach(

        
        /** @param {HTMLArticleElement} card - article card */

        card => {


        //  -----  Referencias al HTML de cada tarjeta  -----

        /** @type {HTMLHeaderElement | null} - header de la tarjeta */
        const header = card.querySelector('.card__header');
        
        /** @type {HTMLParagraphElement | null} - descripción de la tarjeta */  
        const description = card.querySelector('.content__description');
        
        /** @type {HTMLButtonElement | null} - botón para cambiar estilos */
        const btnChangeEstilos = card.querySelector(".content__btn");


        //  -----  Validar que los elementos existan antes de agregar eventos  -----
        if(!header || !description || !btnChangeEstilos) 
            return;


        //  -----  Seleccionar botón de cambiar estilos existente -----
        btnChangeEstilos.addEventListener('click', () => {


            //  -----  Cambiar estilos de la tarjeta, header, descripción y botón  -----
            card.classList.toggle("active");  
            header.classList.toggle("active");
            description.classList.toggle("active");
            btnChangeEstilos.classList.toggle("active");
            
            //  -----  Cambiar el texto del botón según el estado de la tarjeta  -----
            if(card.classList.contains('active'))
                btnChangeEstilos.textContent = "Estilos Iniciales";
            
            else
                btnChangeEstilos.textContent = "Cambiar estilos";

        });

    });


})();
