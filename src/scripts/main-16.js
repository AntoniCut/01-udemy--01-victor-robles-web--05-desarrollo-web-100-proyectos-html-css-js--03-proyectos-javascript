/*
    *  ------------------------------------------------------  *
    *  -----  /main-16.js  --  /src/scripts/main-16.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 16 JS  -----');
    console.log('\n');


    /** @type {HTMLDivElement | null} - Elemento donde se mostrará la información del navegador y la ventana */
    const data = document.querySelector("#data");

    if (!data)
        throw new Error('No se ha encontrado el elemento con el id "data"');


    /**
     * -------------------------------
     * -----  actualizarInfo()  ------
     * -------------------------------
     * -Funcion para actualizar la informacion del navegador y la ventana cada vez que se ejecute, mostrando la anchura, altura y URL de ambos
     */

    const actualizarInfo = () => {

        /** @type {string} - Información del navegador y la ventana */
        const info = `
            <br> 
            <h2> Navegador </h2>
            <h3> Anchura: ${screen.width} px </h3>
            <h3> Altura: ${screen.height} px </h3>
            <h3> URL: ${window.location.href} </h3>
            <br> <hr> <br>
            <h2> Ventana </h2>
            <h3>Anchura: ${window.innerWidth} px </h3>
            <h3> Altura: ${window.innerHeight} px </h3>
            <h3> URL: ${window.location.href} </h3>
        `;

        data.innerHTML = info;
    }

    //  -----  Mostrar info inicial  -----
    actualizarInfo();

    //  -----  Abrir la nueva página en una ventana aparte  -----
    setTimeout(() => window.open('https://victorroblesweb.es/ruta', "_blank"), 3000);

    //  -----  Actualizar info en cada resize de la ventana  -----
    window.addEventListener('resize', actualizarInfo);


})();
