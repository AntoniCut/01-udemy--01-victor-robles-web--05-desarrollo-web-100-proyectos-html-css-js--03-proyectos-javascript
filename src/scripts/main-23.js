/*
    *  ------------------------------------------------------  *
    *  -----  /main-23.js  --  /src/scripts/main-23.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 23 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {HTMLFormElement | null} - `Referencia al formulario de validación de email` */
    const main = document.querySelector(".main__validation-email");
    
    /** @type {HTMLInputElement | null} - `Referencia al input de email` */
    const input = document.querySelector(".validation-email__input");
    
    /** @type {HTMLElement | null} - `Referencia al icono de check - correcto` */
    const check = document.querySelector(".icons__check");
    
    /** @type {HTMLElement | null} - `Referencia al icono de cruz - incorrecto` */
    const xMark = document.querySelector(".icons__xmark");


    //  -----  Validación de email  -----
    if(!main || !input || !check || !xMark) 
        throw new Error('No se han podido obtener las referencias del HTML');
   

    /**
     * --------------------------
     * -----  `validate()`  -----
     * ---------------------------
     * 
     * - `Función que valida el email ingresado en el input utilizando una expresión regular`
     */

    const validate = () => {

        //let pattern = /@.*\./;
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = input.value;

        //  -----  Validar que el email no esté vacío  -----
        if (email.trim() != "") {

            /** @type {boolean} - `Resultado de la prueba de la expresión regular` */
            const test = pattern.test(email);
            
            console.log('test => ', test);

            if (test) {
                check.classList.add('show');;
                xMark.classList.remove('show');
            }

            else {
                check.classList.remove('show');;
                xMark.classList.add('show');
            }

        }

    }


    //  -----  Evento focus  -----
    input.addEventListener('focus', () => main.classList.add('focus'));


    //  -----  Evento blur  -----
    input.addEventListener('blur', () => main.classList.remove('focus'));

    
    //  -----  Evento keydown  -----
    input.addEventListener('keydown', validate);


})();
