/*
    *  -----------------------------------------------------------  *
    *  -----  main-21.js  --  /src/scripts/pages/main-21.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 21 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `demo del almacén` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__almacen")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo del almacén.");
    }


    /** @type {HTMLElement | null} - `contenedor de las cajas del inventario` */
    const $inventario = /** @type {HTMLElement | null} */ (
        $demo.querySelector(".almacen__inventario")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje de estado del almacén` */
    const $status = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".almacen__status")
    );

    /** @type {NodeListOf<HTMLElement>} - `cajas arrastrables` */
    const $cajas = /** @type {NodeListOf<HTMLElement>} */ (
        $demo.querySelectorAll(".almacen__caja")
    );

    /** @type {NodeListOf<HTMLDivElement>} - `huecos de la estantería` */
    const $huecos = /** @type {NodeListOf<HTMLDivElement>} */ (
        $demo.querySelectorAll(".almacen__hueco")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (!$inventario || !$status || $cajas.length === 0 || $huecos.length === 0) {
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

        $status.textContent = texto;
        $status.classList.remove("almacen__status--error", "almacen__status--success");
        $status.classList.add(
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

        $status.textContent = "";
        $status.classList.remove("almacen__status--error", "almacen__status--success");
    };


    //  -----  preparar cada caja como elemento arrastrable  -----
    $cajas.forEach((caja, indice) => {

        caja.id = `caja${indice + 1}`;

        //  -----  ocultar el aviso al seleccionar otra caja  -----
        caja.addEventListener("pointerdown", () => {
            ocultarMensaje();
        });

        //  -----  guardar el id de la caja al empezar el arrastre  -----
        caja.addEventListener("dragstart", (event) => {

            ocultarMensaje();

            /** @type {DataTransfer | null} - `datos del arrastre` */
            const dataTransfer = event.dataTransfer;

            //  -----  validar el destino y el dataTransfer  -----
            if (dataTransfer && event.currentTarget instanceof HTMLElement) {
                dataTransfer.setData("id", event.currentTarget.id);
            }
        });
    });


    //  -----  cada hueco puede recibir una sola caja  -----
    $huecos.forEach((hueco) => {

        //  -----  permitir soltar sobre el hueco  -----
        hueco.addEventListener("dragover", (event) => {
            event.preventDefault();
        });


        //  -----  soltar la caja en el hueco  -----
        hueco.addEventListener("drop", (event) => {

            event.preventDefault();

            /** @type {DataTransfer | null} - `datos del arrastre` */
            const dataTransfer = event.dataTransfer;

            /** @type {string} - `id de la caja arrastrada` */
            const cajaId = dataTransfer ? dataTransfer.getData("id") : "";


            //  -----  validar el id y el hueco destino  -----
            if (!cajaId || !(event.currentTarget instanceof HTMLElement)) {
                return;
            }

            /** @type {HTMLElement | null} - `caja que se ha soltado` */
            const caja = /** @type {HTMLElement | null} */ (
                document.getElementById(cajaId)
            );

            //  -----  si no existe la caja, no continuar  -----
            if (!caja) {
                return;
            }

            //  -----  si el hueco está libre, guardar la caja  -----
            if (event.currentTarget.children.length === 0) {

                event.currentTarget.appendChild(caja);
                caja.classList.add("almacen__caja--guardada");

                //  -----  avisar cuando ya no queden cajas en el inventario  -----
                if ($inventario.children.length === 0) {
                    window.setTimeout(() => {
                        mostrarMensaje("Todas las cajas han sido guardadas.", "success");
                    }, 1000);
                }
            }
            //  -----  si el hueco ya tiene una caja, avisar  -----
            else {
                mostrarMensaje("Estantería ocupada.", "error");
            }
        });
    });


})();
