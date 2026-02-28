/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-26.js  --------------------------------
    ---------------------------------------------------------
*/


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 26 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {HTMLElement | null} - `icono de estrella gris` */
    const $grayStar = document.querySelector('.main__star--gray');
        
    /** @type {HTMLElement | null} - `icono de estrella amarilla` */
    const $yellowStar = document.querySelector('.main__star--yellow');


    //  -----  Validación de elementos  -----
    if(!$grayStar || !$yellowStar) 
        throw new Error('No se han podido encontrar los elementos en el DOM');


    //  -----  click en la estrella gris  -----
    $grayStar.addEventListener('click', () => {
        $yellowStar.classList.add('visible');
        $grayStar.classList.add('yellow-color');
    });


    //  -----  click en la estrella amarilla  -----
    $yellowStar.addEventListener('click', () => {
        $yellowStar.classList.remove('visible');
        $grayStar.classList.remove('yellow-color');
    });


    
})();
