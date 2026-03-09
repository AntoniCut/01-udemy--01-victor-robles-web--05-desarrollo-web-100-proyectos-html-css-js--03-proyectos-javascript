/*
    *  --------------------------------------------------------------------------  *
    *  -----  /main-21-jquery-ui.js  --  /src/scripts/main-21-jquery-ui.js  -----  *
    *  --------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  Proyecto 21 con jQuery y jQuery UI  -----');
    console.log('\n');


    //  -----  Verificar que jQuery y jQuery UI están cargados  -----

    /** @type {string} - `Versión de jQuery` */
    const jqueryVersion = $.fn.jquery;

    console.warn("Versión de jQuery:", jqueryVersion);

    //  -----  Verificar si jQuery UI está cargado y mostrar su versión  -----
    if ($.ui) {

        /** @type {string} - `Versión de jQuery UI` */
        const jqueryUiVersion = $.ui.version;

        console.warn("Versión de jQuery UI:", jqueryUiVersion);

    } 
    
    else
        console.warn("jQuery UI no está cargado.");


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de las cajas` */
    const $cajas = $(".inventario__caja");
    
    /** @type {JQuery<HTMLDivElement>} - `Contenedor de las estanterías` */
    const $estanterias = $(".almacen__estanteria");


    //  -----  Hacer que las cajas sean arrastrables  -----
    $cajas

        //  -----  recorremos cada caja y le asignamos un ID único  -----
        .each(

            /**
             * @this {HTMLDivElement}
             * @param {number} index
             * @param {HTMLDivElement} element
             * @returns {void}
             */
            function (index, element) {

                /** @type {JQuery<HTMLDivElement>} - `Elemento de la caja` */
                const $element = $(element);

                //  -----  Asignar un ID único a cada caja  -----
                const id = "caja" + (index + 1);
                
                //  -----  Establecer el atributo ID de la caja  -----
                $element.attr("id", id);

            }
        )

        //  -----  Hacemos las cajas arrastrables con jQuery UI  -----
        .draggable(

            /** @type {JQueryUI.DraggableOptions} */
            ({
                revert: "invalid",
                containment: ".layout",
                cursor: "grab"
            })
        );


    /**
     * - `Objeto de la configuración de las opciones para hacer las estanterías droppables con jQuery UI`
     * @type {JQueryUI.DroppableOptions} */

    const droppableOptions = {
        
        accept: ".inventario__caja",
        hoverClass: "hovered",
        
        /**
         * - Función que se ejecuta cuando una caja es soltada sobre una estantería. 
         *   Verifica si la estantería está ocupada y maneja el movimiento de la caja.
         * @this {HTMLElement}
         * @param {Event} event - Evento de jQuery UI que se dispara al soltar un elemento sobre la estantería.
         * @param {JQueryUI.DroppableEventUIParam} ui - Objeto que contiene información sobre el elemento arrastrado y la estantería de destino.
         * @returns {void}
         */

        drop: function (event, ui) {

            /** @type {JQuery<HTMLElement>} */
            const $caja = ui.draggable;

            /** @type {JQuery<HTMLElement>} */
            const $estanteria = $(this);


            //  -----  Verificar si la estantería ya tiene una caja  -----
            const estanteriaOcupada = $estanteria.children().length > 0;

            //  -----  Si la estantería no está ocupada, mover la caja a la estantería  -----
            if (!estanteriaOcupada) {

                $caja
                    .appendTo($estanteria)
                    .css(
                        /** @type {JQuery.PlainObject<string>} */
                        ({
                            position: "relative",
                            left: "0",
                            top: "0",
                            boxShadow: "none"
                        })
                    );

                /** @type {JQuery<HTMLElement>} - `Contenedor del inventario` */
                const $inventario = $(".main__inventario");

                //  -----  Verificar si el inventario está vacío después de mover la caja  -----
                const sinCajas = $inventario.children().length === 0;

                //  -----  Si el inventario está vacío, mostrar una alerta después de un breve retraso  -----
                if (sinCajas) {
                    
                    setTimeout(
                        /** @returns {void} */
                        () => {
                            alert("😊 ¡Todas las cajas han sido guardadas! 😊");
                        },
                        1000
                    );
                }

            } 
            
            //  -----  de lo contrario, revertir el movimiento y mostrar una alerta     -----
            else {

                alert("❌ ¡Estantería ocupada! ❌");

                $caja.draggable(
                    "option",
                    "revert",
                    true
                );
            }

        }

    };

    
    //  -----  Hacer que las estanterías sean droppables con jQuery UI usando las opciones definidas  -----
    $estanterias.droppable(droppableOptions);


})(jQuery);
