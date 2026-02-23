/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-07-v2.js  -----------------------------
    ---------------------------------------------------------
*/



(() => {    


    console.log('\n');
    console.warn('-----  Proyecto 7 JS Version 2  -----');
    console.log('\n');


    //  -----  referencia al HTML  -----


     /**
     * @type {HTMLDivElement|null}
     */
    const resultado = document.querySelector('#resultado');

    if(!resultado) 
        return console.error('No se encontro el elemento resultado');

    const fechaActual = new Date();
    
    /**
     * - Fecha de nacimiento en formato dd/mm/aaaa
     * @type {string|null}
     */
    let fechaNacimiento = '14/10/1975';
    
    let edadAños = 0;;
    let edadMeses = 0;;
    let edadDias = 0;;
    
    /**
     * - Fecha de nacimiento como objeto Date
     * @type {Date}
     */
    let fechaNac;
    
    /**
     * - Limite de fecha: 150 años + 1 día antes de la fecha actual
     * @type {Date}
     */
    const limiteFecha = new Date(
        fechaActual.getFullYear() - 150,
        fechaActual.getMonth(),
        fechaActual.getDate() - 1
    );


    setTimeout(() => {


        do {

            //  -----  Solicitar fecha de nacimiento en formato dd/mm/aa  -----
            do {
                
                fechaNacimiento = prompt("Introduce tu fecha de nacimiento en formato dd/mm/aa:");    

                
            }while (!fechaNacimiento || !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(fechaNacimiento));
            

            //  -----  Separar día, mes y año  -----
            const [dia, mes, año] = fechaNacimiento.split('/').map(num => parseInt(num));


            //  -----  Convertir la fecha ingresada en un objeto Date  -----
            fechaNac = new Date(año, mes - 1, dia);

            //  -----  Validar que la fecha sea menor a la actual y no exceda el límite de 150 años + 1 día  -----
            if (fechaNac <= fechaActual && fechaNac >= limiteFecha) {

                //  -----  Años  -----
                edadAños = fechaActual.getFullYear() - fechaNac.getFullYear();

                //  -----  Meses  -----
                edadMeses = fechaActual.getMonth() - fechaNac.getMonth();

                //  -----  Días  -----
                edadDias = fechaActual.getDate() - fechaNac.getDate();

                //  -----  Ajustar si el mes o día actual es menor que el de nacimiento  -----
                if (edadDias < 0) {

                    edadMeses--;

                    //  -----  Días del mes anterior  -----
                    edadDias += new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
                }

                if (edadMeses < 0) {
                    edadAños--;
                    edadMeses += 12;
                }
            }

        } while (fechaNac > fechaActual || fechaNac < limiteFecha || isNaN(edadAños));

       
        resultado.innerHTML = `
            <h3> Tienes ${edadAños} años, ${edadMeses} meses y ${edadDias} días. </h3>
        `;

        setTimeout(() => {
            alert(`Tienes ${edadAños} años, ${edadMeses} meses y ${edadDias} días.`);
        }, 2000);


    }, 2000);


})();
