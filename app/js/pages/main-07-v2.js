/*
    *  -----------------------------------------------------------------  *
    *  -----  main-07-v2.js  --  /src/scripts/pages/main-07-v2.js  -----  *
    *  -----------------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 7 JS Version 2  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de edad exacta` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__edad-exacta")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLParagraphElement | null} - `texto de la fecha actual` */
    const $fechaActualTexto = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".edad-exacta__fecha-actual")
    );

    /** @type {HTMLFormElement | null} - `formulario de cálculo de edad exacta` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".edad-exacta__form")
    );

    /** @type {HTMLInputElement | null} - `campo de la fecha de nacimiento` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".edad-exacta__input")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje del resultado` */
    const $resultado = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".edad-exacta__resultado")
    );


    //  -----  verificación de bloques  -----
    if (!$fechaActualTexto || !$form || !$input || !$resultado) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        --------------------------------------------------
        -----  1. Fecha actual y límite de 150 años  -----
        --------------------------------------------------
    */

    /** - `fecha actual del sistema` */
    const fechaActual = new Date();

    /** - `límite: 150 años y 1 día antes de hoy` */
    const limiteFecha = new Date(
        fechaActual.getFullYear() - 150,
        fechaActual.getMonth(),
        fechaActual.getDate() - 1
    );

    /** - `patrón dd/mm/aaaa` */
    const patronFecha = /^\d{1,2}\/\d{1,2}\/\d{4}$/;


    /**
     * ------------------------------------
     * -----  `vaciarElemento(nodo)`  -----
     * ------------------------------------
     * - Elimina todos los nodos hijos de un elemento.
     * @param {HTMLElement} nodo - Elemento que se va a vaciar.
     * @return {void}
     */
    const vaciarElemento = (nodo) => {

        while (nodo.firstChild) {
            nodo.removeChild(nodo.firstChild);
        }
    };


    /**
     * ---------------------------------
     * -----  `crearValor(texto)`  -----
     * ---------------------------------
     * - Crea un span con el valor destacado de un dato.
     * @param {string} texto - Texto que se mostrará destacado.
     * @return {HTMLSpanElement} - Span con la clase de valor.
     */
    const crearValor = (texto) => {

        const valor = document.createElement("span");
        valor.className = "edad-exacta__valor";
        valor.textContent = texto;

        return valor;
    };


    /**
     * -------------------------------------
     * -----  `formatearFecha(fecha)`  -----
     * -------------------------------------
     * - Convierte una fecha a texto dd/mm/aaaa.
     * @param {Date} fecha - Fecha que se va a formatear.
     * @return {string} - Fecha en formato dd/mm/aaaa.
     */
    const formatearFecha = (fecha) => {

        /** - `día con dos dígitos` */
        const dia = String(fecha.getDate()).padStart(2, "0");

        /** - `mes con dos dígitos` */
        const mes = String(fecha.getMonth() + 1).padStart(2, "0");

        return `${dia}/${mes}/${fecha.getFullYear()}`;
    };


    /**
     * -----------------------------------
     * -----  `pintarFechaActual()`  -----
     * -----------------------------------
     * - Pinta la fecha actual en la demo.
     * @return {void}
     */
    const pintarFechaActual = () => {

        vaciarElemento($fechaActualTexto);

        $fechaActualTexto.appendChild(document.createTextNode("Hoy es "));
        $fechaActualTexto.appendChild(crearValor(formatearFecha(fechaActual)));
        $fechaActualTexto.appendChild(document.createTextNode("."));
    };


    /**
     * -----------------------------------------------
     * -----  `mostrarResultado(mensaje, tipo)`  -----
     * -----------------------------------------------
     * - Muestra el resultado del cálculo de edad en la demo.
     * @param {string} mensaje - Texto que verá el usuario.
     * @param {"ok" | "error"} tipo - Tipo visual del mensaje.
     * @return {void}
     */
    const mostrarResultado = (mensaje, tipo) => {

        vaciarElemento($resultado);

        $resultado.classList.remove(
            "edad-exacta__resultado--ok",
            "edad-exacta__resultado--error"
        );
        $resultado.classList.add(`edad-exacta__resultado--${tipo}`);
        $resultado.textContent = mensaje;
    };


    /**
     * -------------------------------------------------
     * -----  `esFechaCalendario(dia, mes, anio)`  -----
     * -------------------------------------------------
     * - Comprueba que día, mes y año existan en el calendario.
     * @param {number} dia - Día del mes.
     * @param {number} mes - Mes (1-12).
     * @param {number} anio - Año con cuatro dígitos.
     * @return {boolean} - true si la fecha existe.
     */
    const esFechaCalendario = (dia, mes, anio) => {

        /** - `fecha reconstruida con los valores recibidos` */
        const fecha = new Date(anio, mes - 1, dia);

        return (
            fecha.getFullYear() === anio &&
            fecha.getMonth() === mes - 1 &&
            fecha.getDate() === dia
        );
    };


    /**
     * -----------------------------------
     * -----  `parsearFecha(texto)`  -----
     * -----------------------------------
     * - Convierte un texto dd/mm/aaaa en un objeto Date.
     * @param {string} texto - Fecha escrita por el usuario.
     * @return {Date | null} - Fecha válida o null si el formato no es correcto.
     */
    const parsearFecha = (texto) => {

        const fechaLimpia = texto.trim();


        //  -----  validar el formato dd/mm/aaaa  -----
        if (!patronFecha.test(fechaLimpia)) {
            return null;
        }


        const [diaTexto, mesTexto, anioTexto] = fechaLimpia.split("/");
        const dia = Number(diaTexto);
        const mes = Number(mesTexto);
        const anio = Number(anioTexto);


        //  -----  validar que el día exista en ese mes  -----
        if (!esFechaCalendario(dia, mes, anio)) {
            return null;
        }

        return new Date(anio, mes - 1, dia);
    };


    /**
     * ------------------------------------
     * -----  `calcularEdadExacta()`  -----
     * ------------------------------------
     * - Valida la fecha de nacimiento y muestra años, meses y días.
     * @return {void}
     */
    const calcularEdadExacta = () => {

        /** @type {Date | null} - `fecha de nacimiento parseada` */
        const fechaNac = parsearFecha($input.value);


        //  -----  si el formato o el calendario no son válidos  -----
        if (!fechaNac) {
            mostrarResultado("Introduce la fecha en formato dd/mm/aaaa. Vuelve a intentarlo.", "error");
            $input.focus();
            return;
        }


        //  -----  si la fecha es posterior a hoy  -----
        if (fechaNac > fechaActual) {
            mostrarResultado("La fecha no puede ser posterior a hoy. Vuelve a intentarlo.", "error");
            $input.focus();
            return;
        }


        //  -----  si la fecha supera el límite de 150 años  -----
        if (fechaNac < limiteFecha) {
            mostrarResultado("La fecha no puede ser anterior a 150 años. Vuelve a intentarlo.", "error");
            $input.focus();
            return;
        }


        /** - `años de diferencia` */
        let edadAnios = fechaActual.getFullYear() - fechaNac.getFullYear();

        /** - `meses de diferencia` */
        let edadMeses = fechaActual.getMonth() - fechaNac.getMonth();

        /** - `días de diferencia` */
        let edadDias = fechaActual.getDate() - fechaNac.getDate();


        //  -----  ajustar si el día actual es menor que el de nacimiento  -----
        if (edadDias < 0) {
            edadMeses--;
            edadDias += new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
        }


        //  -----  ajustar si el mes actual es menor que el de nacimiento  -----
        if (edadMeses < 0) {
            edadAnios--;
            edadMeses += 12;
        }


        /** @type {string} - `frase con la edad exacta` */
        const mensaje = `Tienes ${edadAnios} años, ${edadMeses} meses y ${edadDias} días.`;

        console.log(mensaje);
        mostrarResultado(mensaje, "ok");
    };


    //  -----  pintar la fecha actual al cargar  -----
    pintarFechaActual();


    //  -----  calcular al enviar el formulario  -----
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        calcularEdadExacta();
    });


})();
