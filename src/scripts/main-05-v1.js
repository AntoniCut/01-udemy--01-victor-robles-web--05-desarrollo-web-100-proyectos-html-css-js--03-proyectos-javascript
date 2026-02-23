/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-05-v1.js  -----------------------------
    ---------------------------------------------------------
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 5 JS Version 1  -----');
    console.log('\n');

    
    //  -----  referencia al html  -----

    /**   {HTMLSectionElement|null}
     * @type {HTMLSectionElement|null}  
     * */
    const tableContainer = document.querySelector('.tables');

    if (!tableContainer) 
        return;
    
    /**
     * @type {number}
     */
    let result = 0;


    //  -----  bucle para sacar el numero de la tabla  -----
    for (let i = 1; i <= 10; i++) {

        //  -----  Plantilla para mostrar encabezado  --------  
        //  -----  y crear caja operaciones de la tabla  -----
        tableContainer.innerHTML += `
            
            <div class='tables__item'>
                
                <h2 class='tables__title'> 
                    Tabla del ${i} 
                </h2>
                
                <div class='tables__box'>
                    <ul class='tables__list tables__list--${i}'> </ul>
                </div>
                

            </div>
        `;


        //  -----  bucle para sacar numeros para las operaciones de la tabla  -----
        for (let n = 1; n <= 10; n++) {

            //  -----  calcular resultado de la operación  -----
            result = i * n;

            //  -----  sacar caja donde mostrar operaciones  -----

            /**
             * @type {HTMLUListElement|null}
             */
            const lists = document.querySelector('.tables__list--' + i);

            if (!lists) return;

            //  -----  Imprimir todas las operaciones  -----
            lists.innerHTML += `<li class='list__item'>${i} X ${n} = ${result}</li>`;
            
        }


        //  -----  Añadir <hr> después de la quinta tabla  -----
        if (i === 5) {
           
            const separator = document.createElement('hr'); // Crear un nuevo <hr> cada vez
            separator.classList.add('separator');
            tableContainer.appendChild(separator);
        }
    }



})();
