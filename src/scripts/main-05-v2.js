/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-05-v2.js  -----------------------------
    ---------------------------------------------------------
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 5 JS Version 2  -----');
    console.log('\n');


    //  -----  referencia al HTML  -----

    /**
     * {HTMLSectionElement|null}
     * @type {HTMLSectionElement|null}
     */
    const tableContainer = document.querySelector('.tables');

    if (!tableContainer) 
        return;

    /**
     * @type {number}
     */
    let result = 0;


    //  -----  Bucle para crear tablas del 1 al 10  -----
    for (let i = 1; i <= 10; i++) {


        //  -----  Crear contenedor para cada tabla de multiplicar  -----
        const tableItem = document.createElement('div');
        tableItem.classList.add('tables__item');


        //  -----  Crear el título para la tabla  -----
        const tableTitle = document.createElement('h2');
        tableTitle.classList.add('tables__title')
        tableTitle.textContent = `Tabla del ${i}`;

        //  -----  Añadir el título al contenedor de la tabla  -----
        tableItem.appendChild(tableTitle);

        //  -----  Crear caja para las operaciones de la tabla  -----
        const tableBox = document.createElement('div');
        tableBox.classList.add('tables__box');

        //  -----  Crear lista de elementos (operaciones de la tabla)  -----
        const tableList = document.createElement('ul');
        tableList.classList.add('tables__list', `tables__list--${i}`);


        //  -----  Crear un fragmento para mejorar el rendimiento  -----
        /**
         * - Fragmento de documento para mejorar el rendimiento al añadir múltiples elementos al DOM.
         * @type {DocumentFragment}
         */
        const fragment = document.createDocumentFragment();


        //  -----  Añadir cada operación de la tabla como un elemento de lista  -----
        for (let n = 1; n <= 10; n++) {

            //  -----  Calcular resultado de la operación  -----
            result = i * n;

            //  -----  Crear elemento de lista para cada operación  -----
            const listItem = document.createElement('li');
            listItem.classList.add('list__item');
            listItem.textContent = `${i} X ${n} = ${result}`;

            //  -----  Añadir operación a la lista  -----
            fragment.appendChild(listItem);

        }


        //  -----  Añadir todas las operaciones a la lista de una vez  -----
        tableList.appendChild(fragment);

        //  -----  Añadir la lista a la caja y la caja al contenedor de la tabla  -----
        tableBox.appendChild(tableList);
        tableItem.appendChild(tableBox);

        //  -----  Añadir el contenedor de la tabla al contenedor principal  -----
        tableContainer.appendChild(tableItem);


        //  -----  Añadir <hr> después de la quinta tabla  -----
        if (i === 5) {

            const separator = document.createElement('hr'); // Crear <hr> de separación
            separator.classList.add('separator');
            tableContainer.appendChild(separator);
        }
    }


})();
