/*
    *  -----------------------------------------------------------  *
    *  -----  main-34.js  --  /src/scripts/pages/main-34.js  -----  *
    *  -----------------------------------------------------------  *
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

    /** @type {HTMLElement | null} - `demo del chat con loader` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__chat")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo del chat.");
    }


    /** @type {HTMLDivElement | null} - `contenedor de los mensajes` */
    const $messages = /** @type {HTMLDivElement | null} */ (
        $demo.querySelector(".chat__messages")
    );

    /** @type {HTMLFormElement | null} - `formulario de envío` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".chat__form")
    );

    /** @type {HTMLInputElement | null} - `campo de texto del mensaje` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".form__input")
    );

    /** @type {HTMLButtonElement | null} - `botón de enviar mensaje` */
    const $btn = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".form__btn")
    );


    //  -----  validamos que existan los elementos necesarios  -----
    if (!$messages || !$form || !$input || !$btn) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /*
        *  -----------------------  *
        *  -----  Variables  -----  *
        *  -----------------------  *
    */

    /** - `clave de localStorage para los mensajes` */
    const CLAVE_STORAGE = "proyecto-34-chat";

    /** - `nombre del autor de los mensajes` */
    const AUTOR = "Antonio Cutillas";

    /** - `mensaje inicial del chat` */
    const MENSAJE_BIENVENIDA = "Bienvenido al chat";

    /** - `duración del loader en milisegundos` */
    const CARGA_MS = 5000;

    /** - `indica si la carga ya se ejecutó` */
    let cargaIniciada = false;

    /** @type {number | null} - `identificador del temporizador de carga` */
    let timeoutId = null;


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * ---------------------------------
     * -----  `obtenerMensajes()`  -----
     * ---------------------------------
     * - Lee los mensajes guardados en localStorage.
     * @return {ChatMensaje[]} - Lista de mensajes almacenados.
     */
    const obtenerMensajes = () => {

        /** - `contenido crudo de localStorage` */
        const bruto = localStorage.getItem(CLAVE_STORAGE);

        //  -----  si no hay datos, devolver lista vacía  -----
        if (!bruto) {
            return [];
        }

        //  -----  parsear el json de localStorage  -----
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

        //  -----  scroll al final del chat  -----
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

        $demo.classList.add("demo__chat--ready");
        $demo.setAttribute("aria-busy", "false");
        $btn.removeAttribute("disabled");
        $input.focus();
    };


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
        timeoutId = window.setTimeout(mostrarChat, CARGA_MS);
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    /** @type {IntersectionObserver} - `observer para detectar cuando la demo es visible` */
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


    //  -----  observamos la demo para iniciar la carga al hacer scroll  -----
    observer.observe($demo);


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


})();
