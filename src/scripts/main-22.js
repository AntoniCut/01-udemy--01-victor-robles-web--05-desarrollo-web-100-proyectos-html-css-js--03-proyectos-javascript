/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-22.js  --------------------------------
    ---------------------------------------------------------
*/


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 22 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {HTMLInputElement | null} - `Referencia al input del usuario` */
    const $input = document.querySelector(".main__input");


    /** @type {HTMLParagraphElement | null} - `Referencia al párrafo donde se mostrará el texto` */
    const $textOutput = document.querySelector(".main__text");

    /** @type {HTMLTextAreaElement | null} - `Referencia al textarea donde se muestra el texto original` */
    const $textArea = document.querySelector(".main__textarea");


    //  -----  Validación de elementos  -----
    if (!$input || !$textOutput || !$textArea)
        throw new Error("No se encontraron los elementos necesarios en el DOM.");


    //  -----  Guarda el texto original para restaurarlo  -----
    const $originalText = $textOutput.textContent;


    //  -----  Evento para detectar cuando el usuario presiona "Enter"  -----
    $input.addEventListener("keydown", (e) => {

        /** @type {string} - `Texto ingresado por el usuario` */
        const search = $input.value;

        if (search.trim() != "" && e.key === "Enter") {

            /** 
             * @type {RegExp} 
             * - `Crea una expresión regular para buscar el texto ingresado de manera global, 
             *    ignorando mayúsculas y minúsculas` 
             */
            let regExp = new RegExp(search, "gi");

            /** @type {string} - `Texto base donde se realizará la búsqueda` */
            const baseText = $textArea.textContent;

            //  -----  Reemplaza el texto encontrado con una versión envuelta  -----
            //  -----  en un span para resaltar la búsqueda                    -----
            $textOutput.innerHTML = baseText.replace(
                regExp,
                `<span class="text__search">${search}</span>`
            );
        }

    });


    //  -----  Evento para detectar cuando el usuario borra el texto (incluyendo la "X")  -----
    $input.addEventListener("input", () => {

        if ($input.value.trim() === "")
            $textOutput.innerHTML = $originalText; // Restaurar el texto original
    });


    //  -----  Evento para actualizar el texto donde se realizará la búsqueda  -----
    $textArea.addEventListener("input", () => {

        $textOutput.textContent = $textArea.textContent;

    });



})();
