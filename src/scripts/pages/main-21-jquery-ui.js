/*
    *  -------------------------------------------------------------------------------  *
    *  -----  main-21-jquery-ui.js  --  /src/scripts/pages/main-21-jquery-ui.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />


(($) => {


    console.log("\n");
    console.warn("-----  Proyecto 21 con jQuery y jQuery UI  -----");
    console.log("\n");


    //  -----  verificar que jQuery y jQuery UI están cargados  -----

    /** @type {string} - `versión de jQuery` */
    const jqueryVersion = $.fn.jquery;

    console.warn("Versión de jQuery:", jqueryVersion);

    //  -----  verificar si jQuery UI está cargado  -----
    if ($.ui) {

        /** @type {string} - `versión de jQuery UI` */
        const jqueryUiVersion = $.ui.version;

        console.warn("Versión de jQuery UI:", jqueryUiVersion);
    }
    else {
        console.warn("jQuery UI no está cargado.");
    }


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {JQuery<HTMLElement>} - `demo del almacén` */
    const $demo = $(".demo__almacen");

    /** @type {JQuery<HTMLElement>} - `contenedor de las cajas` */
    const $inventario = $demo.find(".almacen__inventario");

    /** @type {JQuery<HTMLElement>} - `cajas arrastrables` */
    const $cajas = $demo.find(".almacen__caja");

    /** @type {JQuery<HTMLElement>} - `huecos de la estantería` */
    const $huecos = $demo.find(".almacen__hueco");

    /** @type {JQuery<HTMLElement>} - `mensaje de estado del almacén` */
    const $status = $demo.find(".almacen__status");


    //  -----  validamos que existan los elementos necesarios  -----
    if ($demo.length === 0 || $inventario.length === 0 || $status.length === 0 || $cajas.length === 0 || $huecos.length === 0) {
        throw new Error("No se han encontrado los elementos necesarios del almacén.");
    }


    /**
     * -------------------------------------------
     * -----  `mostrarMensaje(texto, tipo)`  -----
     * -------------------------------------------
     * - Muestra un mensaje de error o de éxito dentro de la demo.
     * @param {string} texto - Texto que verá el usuario.
     * @param {AlmacenMensajeTipo} tipo - Tipo visual del mensaje.
     * @return {void}
     */
    const mostrarMensaje = (texto, tipo) => {

        $status
            .text(texto)
            .removeClass("almacen__status--error almacen__status--success")
            .addClass(
                tipo === "error" ? "almacen__status--error" : "almacen__status--success"
            );
    };


    /**
     * --------------------------------
     * -----  `ocultarMensaje()`  -----
     * --------------------------------
     * - Quita el mensaje de estado de la demo.
     * @return {void}
     */
    const ocultarMensaje = () => {

        $status
            .text("")
            .removeClass("almacen__status--error almacen__status--success");
    };


    //  -----  asignar un id único a cada caja  -----
    $cajas.each((index, element) => {
        $(element).attr("id", `caja${index + 1}`);
    });


    //  -----  ocultar el aviso al seleccionar otra caja  -----
    $cajas.on("pointerdown", () => {
        ocultarMensaje();
    });


    //  -----  hacer que las cajas sean arrastrables  -----
    $cajas.draggable(

        /** @type {JQueryUI.DraggableOptions} */
        ({
            revert: "invalid",
            containment: ".demo__almacen",
            cursor: "grab",
            start: () => {
                ocultarMensaje();
            }
        })
    );


    /**
     * - `opciones para soltar las cajas en los huecos`
     * @type {JQueryUI.DroppableOptions}
     */
    const droppableOptions = {

        accept: ".almacen__caja",
        hoverClass: "almacen__hueco--hovered",

        /**
         * - Mueve la caja al hueco si está libre o avisa si ya está ocupado.
         * @this {HTMLElement}
         * @param {Event} _event - Evento de soltar de jQuery UI.
         * @param {JQueryUI.DroppableEventUIParam} ui - Datos de la caja arrastrada.
         * @returns {void}
         */
        drop: function (_event, ui) {

            /** @type {JQuery<HTMLElement>} - `caja arrastrada` */
            const $caja = ui.draggable;

            /** @type {JQuery<HTMLElement>} - `hueco de destino` */
            const $hueco = $(this);

            /** - `el hueco ya tiene una caja` */
            const huecoOcupado = $hueco.children().length > 0;

            //  -----  si el hueco está libre, guardar la caja  -----
            if (!huecoOcupado) {

                $caja
                    .appendTo($hueco)
                    .addClass("almacen__caja--guardada")
                    .css(
                        /** @type {JQuery.PlainObject<string>} */
                        ({
                            position: "relative",
                            left: "0",
                            top: "0"
                        })
                    );

                /** - `ya no quedan cajas en el inventario` */
                const sinCajas = $inventario.children().length === 0;

                //  -----  avisar cuando el inventario quede vacío  -----
                if (sinCajas) {
                    window.setTimeout(() => {
                        mostrarMensaje("Todas las cajas han sido guardadas.", "success");
                    }, 1000);
                }
            }
            //  -----  si el hueco está ocupado, revertir el movimiento  -----
            else {

                mostrarMensaje("Estantería ocupada.", "error");

                $caja.draggable("option", "revert", true);
            }
        }
    };


    //  -----  hacer que los huecos reciban las cajas  -----
    $huecos.droppable(droppableOptions);


})(jQuery);
