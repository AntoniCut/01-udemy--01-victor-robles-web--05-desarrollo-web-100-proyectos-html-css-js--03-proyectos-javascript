/*
    *  ------------------------------------------------------  *
    *  -----  /main-21.js  --  /src/scripts/main-21.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  Proyecto 21 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----
    
    /** @type {HTMLSectionElement | null} - `Contenedor de las cajas del inventario` */
    const inventarioDom = document.querySelector(".main__inventario");
    
    /** @type {NodeListOf<HTMLDivElement>} - `Cajas del inventario - cada caja es un 'HTMLDivElement'` */
    const cajas = document.querySelectorAll(".inventario__caja");
    
    /** @type {NodeListOf<HTMLDivElement>} - `Estanterías del almacén - cada estantería es un 'HTMLDivElement'` */
    const estanteriaDom = document.querySelectorAll(".almacen__estanteria");


    //  -----  Validar referencias al DOM  -----
    if (!inventarioDom || cajas.length === 0 || estanteriaDom.length === 0) {
        throw new Error('Error: No se pudieron encontrar los elementos del DOM necesarios para el proyecto.');
    }


    //  -----  Mostrar referencias en consola  -----
    console.log('inventarioDom => ', inventarioDom);
    console.log('cajas => ', cajas);
    console.log('estanteriaDom => ', estanteriaDom);


    //  -----  poner un id único a cada caja movible  -----
    cajas.forEach((caja, i) => {
        
        //  -----  asignar un id único a cada caja  -----
        caja.setAttribute('id', 'caja' + (i + 1));

        //  -----  establecer cada caja como un elemento arrastrable  -----
        caja.addEventListener("dragstart", (e) => {
            
            /** @type {DataTransfer | null} - `Objeto dataTransfer del evento de arrastre` */
            const dataTransfer = e.dataTransfer;
                   
            //  -----  establecer el id de la caja como dato a transferir durante el arrastre  -----
            const target = e.target;
            
            //  -----  Validar que el target del evento es un elemento HTML y que el objeto dataTransfer no es nulo  -----
            if (dataTransfer && target instanceof HTMLElement) {
                dataTransfer.setData("id", target.id);
            }
        });
        
    });


    //  -----  establecer cada hueco de la estanteria   -----
    //  -----  un hueco donde puedo soltar un elemento  -----
    estanteriaDom.forEach((estanteria) => {


        //  -----  desactivar el dragover  -----
        estanteria.addEventListener("dragover", e => e.preventDefault());


        //  -----  al soltar la caja en la almacen estanteria  -----
        estanteria.addEventListener("drop", e => {


            e.preventDefault();

            /** @type {DataTransfer | null} - `Objeto dataTransfer del evento de arrastre` */
            const dataTransfer = e.dataTransfer;

            /** @type {string | null} - `ID de la caja arrastrada` */
            const cajaId = dataTransfer ? dataTransfer.getData("id") : null;
            
            console.log('cajaId => ', cajaId);


            //  -----  Validar que se obtuvo un id de caja válido y que  -----
            //  -----  el elemento actual del evento es un HTMLElement   -----
            if (cajaId && e.currentTarget instanceof HTMLElement) {

                /** @type {HTMLDivElement | null} */
                const caja = document.querySelector("#" + cajaId);
                
                //  -----  Validar que se encontró el elemento de la caja con el id proporcionado  -----
                if (!caja) {
                    throw new Error('Error: No se pudo encontrar la caja con el id proporcionado.');
                }
                
                console.log("Elemento de la caja:", caja);

                //  -----  Verificar si la estantería ya tiene una caja dentro  -----
                if (e.currentTarget.children.length === 0) {
                    
                    //  -----  Mover la caja al estante soltado  -----
                    e.currentTarget.appendChild(caja);
                    
                    //  -----  Eliminar el estilo 'sombra' de caja arrastrable para indicar que ya está guardada  -----
                    caja.style.boxShadow = "none";

                } else
                    alert("❌ ¡Estantería ocupada! ❌");

                //  -----  alerta si todas las cajas han sido guardadas  -----
                if (inventarioDom.children.length === 0) 
                    setTimeout(() => alert("😊 ¡Todas las cajas han sido guardadas! 😊"), 1000);
                
            }

        });

    });



})();
