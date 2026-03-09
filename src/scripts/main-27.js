/*
    *  ------------------------------------------------------  *
    *  -----  /main-27.js  --  /src/scripts/main-27.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 27 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----


    /** @type {HTMLArticleElement | null} - `Articulo del lado izquierdo` */
    const $articleLeft = document.querySelector('.articles__article--left');
    


    /** @type {HTMLArticleElement | null} - `Articulo del lado derecho` */
    const $articleRight = document.querySelector('.articles__article--right');


    //  -----  Verificación de elementos  -----
    if (!$articleLeft || !$articleRight)
        throw new Error('No se han encontrado los elementos necesarios en el HTML.');


    //  -----  cuando el mouse entre en el artículo izquierdo  -----
    $articleLeft.addEventListener('mouseenter', () => {
        $articleLeft.classList.add('active');
        $articleRight.classList.add('inactive');
    });


    //  -----  cuando el mouse salga del artículo izquierdo  -----
    $articleLeft.addEventListener('mouseleave', () => {
        $articleLeft.classList.remove('active');
        $articleRight.classList.remove('inactive');
    });


    //  -----  cuando el mouse entre en el artículo derecho  -----
    $articleRight.addEventListener('mouseenter', () => {
        $articleRight.classList.add('active');
        $articleLeft.classList.add('inactive');
    });


    //  -----  cuando el mouse salga del artículo derecho  -----
    $articleRight.addEventListener('mouseleave', () => {
        $articleRight.classList.remove('active');
        $articleLeft.classList.remove('inactive');
    });



})();
