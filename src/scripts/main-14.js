/*
    ---------------------------------------------------------
    ----------  /udemy.antonydev.tech/  ---------------------
    ----------  /curso-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ------------------
    ----------  /src/scripts/projects/  ---------------------
    ----------  /main-14.js  --------------------------------
    ---------------------------------------------------------
*/


(() => {


    console.log('\n');
    console.warn('-----  Proyecto 14 JS  -----');
    console.log('\n');


    setTimeout(() => {


        //  -----  Referencia al HTML  -----
        const cajaContent = document.querySelector('#content');

        //  -----  Sueldos de empleados  -----
        const sueldos = [1050, 640, 750, 1500, 2200, 3011, 432];

        const sueldoUsuario = parseInt(prompt('¿Cuál es tu sueldo?') ?? '0');


        //  -----  Función para buscar sueldos iguales o mayores -----
        function buscarSueldos(salarios, miSueldo) {

            //  -----  Validar si el sueldo ingresado es un número válido  -----
            if (isNaN(miSueldo)) {
                cajaContent.innerHTML = `<h3> Por favor, ingresa un número válido. </h3>`;
                return;
            }

            //  ----- Filtrar sueldos mayores o iguales al del usuario  -----
            const busquedas = salarios.filter(salario => salario >= miSueldo);

            //  -----  Ordenar los resultados en orden ascendente  -----
            const ordenar = busquedas.sort((a, b) => a - b);

            //  -----  Mostrar en el DOM los sueldos encontrados  -----
            cajaContent.innerHTML = `
                <h3> Salarios iguales o mayores a ${miSueldo}: </h3>
                <p> ${ordenar.length > 0 ? ordenar.join(', ') : "No hay sueldos mayores o iguales al tuyo."} </p>
            `;

        }

        //  -----  Ejecutar la función  -----
        buscarSueldos(sueldos, sueldoUsuario);


    }, 2000);


})();
