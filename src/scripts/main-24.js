/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-24.js  --------------------------------
    ---------------------------------------------------------
*/


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 00 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {HTMLInputElement | null} - `input de tipo password` */
    const $input = document.querySelector(".form__input");
    
    
    /** @type {HTMLElement | null} - `icono de ojo` */
    const $icon = document.querySelector(".form__eye > .fa-solid");
        

    //  -----  Validación de elementos en el DOM  -----
    if (!$input || !$icon) 
        throw new Error("No se han encontrado los elementos necesarios en el DOM");


    //  -----  Eventos  -----
    $icon.addEventListener("click", () => {
        
        //  -----  Toggle del tipo de input  -----
        if ($input.type === "password" && $input.value.trim() != "")
            $input.type = "text";
        
        else
            $input.type = "password";
        
    });
    

})();
