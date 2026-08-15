/*
    *  -----------------------------------------------------------  *
    *  -----  main-34.js  --  /src/scripts/pages/main-34.js  -----  *
    *  -----------------------------------------------------------  *
*/

/**
 * @typedef {Object} ChatMensaje
 * @property {string} nombre - Nombre del autor del mensaje.
 * @property {string} texto - Texto del mensaje.
 */


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 34 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del chat` */
    const $chat = document.querySelector(".demo__chat");

    /** @type {HTMLDivElement | null} - `Contenedor de los mensajes` */
    const $messages = $chat ? $chat.querySelector(".chat__messages") : null;

    /** @type {HTMLFormElement | null} - `Formulario de envío` */
    const $form = $chat ? $chat.querySelector(".chat__form") : null;

    /** @type {HTMLInputElement | null} - `Campo de texto del mensaje` */
    const $input = $chat ? $chat.querySelector(".form__input") : null;

    /** @type {HTMLButtonElement | null} - `Botón de enviar mensaje` */
    const $btn = $chat ? $chat.querySelector(".form__btn") : null;


    //  -----  verificación de elementos  -----
    if (!$chat || !$messages || !$form || !$input || !$btn) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** - `clave de localstorage para los mensajes` */
    const CLAVE_STORAGE = "proyecto-34-chat";

    /** - `nombre del autor de los mensajes` */
    const AUTOR = "Antonio Cutillas";

    /** - `mensaje inicial del chat` */
    const MENSAJE_BIENVENIDA = "Bienvenido al chat";


    /**
     * ---------------------------------
     * -----  `obtenerMensajes()`  -----
     * ---------------------------------
     * - Lee los mensajes guardados en localStorage.
     * @return {ChatMensaje[]} - Lista de mensajes almacenados.
     */
    const obtenerMensajes = () => {

        /** - `contenido crudo de localstorage` */
        const bruto = localStorage.getItem(CLAVE_STORAGE);

        //  -----  si no hay datos, devolver lista vacía  -----
        if (!bruto) {
            return [];
        }

        //  -----  parsear el json de localstorage  -----
        try {

            /** @type {unknown} - `datos parseados` */
            const parseado = JSON.parse(bruto);

            //  -----  si no es un array, devolver lista vacía  -----
            if (!Array.isArray(parseado)) {
                return [];
            }

            return /** @type {ChatMensaje[]} */ (parseado);

        }
        //  -----  si el json es inválido, devolver lista vacía  -----
        catch {
            return [];
        }

    };


    /**
     * -----------------------------------------
     * -----  `guardarMensajes(mensajes)`  -----
     * -----------------------------------------
     * - Guarda la lista de mensajes en localStorage.
     * @param {ChatMensaje[]} mensajes - Lista de mensajes a persistir.
     * @return {void}
     */
    const guardarMensajes = (mensajes) => {

        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(mensajes));

    };


    /**
     * -------------------------------------------
     * -----  `crearMensaje(texto, nombre)`  -----
     * -------------------------------------------
     * - Crea un artículo de mensaje y lo añade al chat.
     * @param {string} texto - Texto del mensaje a mostrar.
     * @param {string} nombre - Nombre del autor del mensaje.
     * @return {void}
     */
    const crearMensaje = (texto, nombre) => {

        /** @type {HTMLArticleElement} - `artículo del mensaje` */
        const articulo = document.createElement("article");

        articulo.className = "messages__message";

        /** @type {HTMLParagraphElement} - `nombre del autor` */
        const nombreEl = document.createElement("p");

        nombreEl.className = "message__name";
        nombreEl.textContent = nombre;

        /** @type {HTMLParagraphElement} - `texto del mensaje` */
        const mensaje = document.createElement("p");

        mensaje.className = "message__text";
        mensaje.textContent = texto;

        articulo.appendChild(nombreEl);
        articulo.appendChild(mensaje);
        $messages.appendChild(articulo);

        /** - `scroll al final del chat` */
        $messages.scrollTop = $messages.scrollHeight;

    };


    /**
     * ----------------------------------------
     * -----  `pintarMensajes(mensajes)`  -----
     * ----------------------------------------
     * - Vacía el chat y pinta la lista de mensajes.
     * @param {ChatMensaje[]} mensajes - Lista de mensajes a mostrar.
     * @return {void}
     */
    const pintarMensajes = (mensajes) => {

        $messages.replaceChildren();

        mensajes.forEach((mensaje) => {
            crearMensaje(mensaje.texto, mensaje.nombre);
        });

    };


    /**
     * -------------------------------------
     * -----  `enviarMensaje(evento)`  -----
     * -------------------------------------
     * - Envía el mensaje, lo muestra y lo guarda en localStorage.
     * @param {Event} evento - Evento de envío, clic o teclado.
     * @return {void}
     */
    const enviarMensaje = (evento) => {

        evento.preventDefault();

        /** - `texto escrito en el campo` */
        const texto = $input.value.trim();

        //  -----  no enviar si el campo está vacío  -----
        if (texto === "") {
            return;
        }

        /** @type {ChatMensaje} - `mensaje a guardar` */
        const mensajeNuevo = {
            nombre: AUTOR,
            texto: texto,
        };

        /** @type {ChatMensaje[]} - `lista actualizada de mensajes` */
        const mensajes = obtenerMensajes();

        mensajes.push(mensajeNuevo);
        guardarMensajes(mensajes);
        crearMensaje(mensajeNuevo.texto, mensajeNuevo.nombre);

        $input.value = "";
        $input.focus();

    };


    /**
     * -----------------------------
     * -----  `mostrarChat()`  -----
     * -----------------------------
     * - Oculta el loader, restaura los mensajes y muestra el chat.
     * @return {void}
     */
    const mostrarChat = () => {

        /** @type {ChatMensaje[]} - `mensajes guardados` */
        let mensajes = obtenerMensajes();

        //  -----  si no hay mensajes, guardar el de bienvenida  -----
        if (mensajes.length === 0) {

            mensajes = [{
                nombre: AUTOR,
                texto: MENSAJE_BIENVENIDA,
            }];

            guardarMensajes(mensajes);

        }

        pintarMensajes(mensajes);

        $chat.classList.add("demo__chat--ready");
        $chat.setAttribute("aria-busy", "false");
        $btn.removeAttribute("disabled");
        $input.focus();

    };


    /**
     * --------------------------------------
     * -----  `iniciarCargaAlScroll()`  -----
     * --------------------------------------
     * - Observa la demo y arranca la carga al entrar en pantalla.
     * @return {void}
     */
    const iniciarCargaAlScroll = () => {

        /** - `indica si la carga ya se ejecutó` */
        let cargaIniciada = false;

        /**
         * ------------------------------
         * -----  `iniciarCarga()`  -----
         * ------------------------------
         * - Inicia el temporizador de 5 segundos y muestra el chat.
         * @return {void}
         */
        const iniciarCarga = () => {

            //  -----  evitar repetir la carga  -----
            if (cargaIniciada) {
                return;
            }

            cargaIniciada = true;
            setTimeout(mostrarChat, 5000);

        };


        /** - `observer para detectar cuando la demo es visible` */
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                //  -----  si la demo es visible, iniciar la carga  -----
                if (entry.isIntersecting) {
                    iniciarCarga();
                    observer.disconnect();
                }

            });

        }, {
            threshold: 0.25,
        });

        observer.observe($chat);

    };


    //  -----  envío del formulario  -----
    $form.addEventListener("submit", enviarMensaje);

    //  -----  clic en el botón enviar  -----
    $btn.addEventListener("click", (evento) => {
        evento.preventDefault();
        enviarMensaje(evento);
    });

    //  -----  pulsar enter para enviar  -----
    $input.addEventListener("keydown", (evento) => {

        //  -----  si no es enter, no hacer nada  -----
        if (evento.key !== "Enter") {
            return;
        }

        evento.preventDefault();
        enviarMensaje(evento);

    });

    iniciarCargaAlScroll();


})();
