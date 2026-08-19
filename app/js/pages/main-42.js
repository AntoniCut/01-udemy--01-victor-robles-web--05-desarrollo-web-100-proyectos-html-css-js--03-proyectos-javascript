/*
    *  -----------------------------------------------------------  *
    *  -----  main-42.js  --  /src/scripts/pages/main-42.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 42 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de usuarios` */
    const $usersDemo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__users")
    );


    //  -----  verificación de elementos  -----
    if (!$usersDemo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLFormElement | null} - `Formulario del buscador` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $usersDemo.querySelector(".users__search")
    );

    /** @type {HTMLInputElement | null} - `Campo de búsqueda` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $usersDemo.querySelector(".search__input")
    );

    /** @type {HTMLSectionElement | null} - `Listado de usuarios` */
    const $container = /** @type {HTMLSectionElement | null} */ (
        $usersDemo.querySelector(".users__list")
    );


    //  -----  verificación del buscador y del listado  -----
    if (!$form || !$input || !$container) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** - `url de la api pública de usuarios con foto` */
    const USERS_URL = "https://randomuser.me/api/?results=24";

    /** - `imagen local si falla el avatar remoto` */
    const AVATAR_POR_DEFECTO = "/assets/img/proyecto-42/default-user.jpg";

    /** @type {Usuario[]} - `usuarios cargados desde la api` */
    let usuarios = [];


    /**
     * -------------------------------------
     * -----  `vaciarListaUsuarios()`  -----
     * -------------------------------------
     * - Elimina todos los nodos del listado de usuarios.
     * @return {void}
     */
    const vaciarListaUsuarios = () => {

        while ($container.firstChild) {
            $container.removeChild($container.firstChild);
        }
    };


    /**
     * -------------------------------------
     * -----  `mostrarMensaje(texto)`  -----
     * -------------------------------------
     * - Muestra un mensaje en el listado cuando no hay resultados o falla la api.
     * @param {string} texto - Mensaje para el usuario.
     * @return {void}
     */
    const mostrarMensaje = (texto) => {

        vaciarListaUsuarios();

        /** @type {HTMLParagraphElement} - `mensaje del listado` */
        const $mensaje = document.createElement("p");
        
        $mensaje.classList.add("users__empty");
        $mensaje.textContent = texto;
        $container.appendChild($mensaje);

    };



    /**
     * --------------------------------------------
     * -----  `crearTarjetaUsuario(usuario)`  -----
     * --------------------------------------------
     * - Crea la tarjeta de un usuario con la misma estructura que el HTML.
     * @param {Usuario} usuario - Usuario a pintar.
     * @return {HTMLArticleElement}
     */
    const crearTarjetaUsuario = (usuario) => {


        /** @type {HTMLArticleElement} - `tarjeta del usuario` */
        const $article = document.createElement("article");
        
        $article.classList.add("users__user");


        /** @type {HTMLFigureElement} - `contenedor de la imagen` */
        const $contenedorImg = document.createElement("figure");
        
        $contenedorImg.classList.add("user__container-img");


        /** @type {HTMLImageElement} - `avatar del usuario` */
        const $img = document.createElement("img");
        
        $img.classList.add("user__img");
        $img.src = usuario.avatar;
        $img.alt = `Imagen de ${usuario.nombre}`;


        //  -----  si el avatar remoto falla, usar la imagen local  -----
        $img.addEventListener("error", () => {
            $img.src = AVATAR_POR_DEFECTO;
        }, { once: true });

        $contenedorImg.appendChild($img);


        /** @type {HTMLDivElement} - `bloque de nombre y email` */
        const $content = document.createElement("div");
        
        $content.classList.add("user__content");


        /** @type {HTMLParagraphElement} - `nombre del usuario` */
        const $nombre = document.createElement("p");
        
        $nombre.classList.add("user__name");
        $nombre.textContent = usuario.nombre;


        /** @type {HTMLParagraphElement} - `email del usuario` */
        const $email = document.createElement("p");
        
        $email.classList.add("user__email");
        $email.textContent = usuario.email;

        //  -----  agregar los elementos al bloque de nombre y email  -----
        $content.appendChild($nombre);
        $content.appendChild($email);

        //  -----  agregar los elementos a la tarjeta del usuario  -----
        $article.appendChild($contenedorImg);
        $article.appendChild($content);

        //  -----  devolver la tarjeta del usuario  -----
        return $article;

    };



    /**
     * ----------------------------------------
     * -----  `pintarUsuarios(usuarios)`  -----
     * ----------------------------------------
     * - Pinta el listado de usuarios en el contenedor.
     * @param {Usuario[]} listaUsuarios - Usuarios a mostrar.
     * @return {void}
     */
    const pintarUsuarios = (listaUsuarios) => {

        vaciarListaUsuarios();

        listaUsuarios.forEach((usuario) => {
            $container.appendChild(crearTarjetaUsuario(usuario));
        });
    };



    /**
     * --------------------------------------
     * -----  `filtrarUsuarios(texto)`  -----
     * --------------------------------------
     * - Filtra el listado por nombre o email según el texto escrito.
     * @param {string} texto - Texto del buscador.
     * @return {void}
     */
    const filtrarUsuarios = (texto) => {

        /** @type {string} - `texto de búsqueda en minúsculas` */
        const textoNormalizado = texto.trim().toLowerCase();

        //  -----  si el buscador está vacío, mostrar todos  -----
        if (!textoNormalizado) {
            pintarUsuarios(usuarios);
            return;
        }

        /** @type {Usuario[]} - `usuarios que coinciden con la búsqueda` */
        const filtrados = usuarios.filter((usuario) => {

            /** @type {string} - `nombre en minúsculas` */
            const nombre = usuario.nombre.toLowerCase();

            /** @type {string} - `email en minúsculas` */
            const email = usuario.email.toLowerCase();

            return nombre.includes(textoNormalizado) || email.includes(textoNormalizado);
        });


        //  -----  si no hay coincidencias, avisar en el listado  -----
        if (filtrados.length === 0) {
            mostrarMensaje("No hay usuarios que coincidan con la búsqueda.");
            return;
        }

        //  -----  pintar los usuarios filtrados  -----
        pintarUsuarios(filtrados);

    };



    /**
     * ---------------------------------
     * -----  `obtenerUsuarios()`  -----
     * ---------------------------------
     * - Obtiene los usuarios de la api pública y los deja listos para pintar.
     * @return {Promise<Usuario[]>}
     */
    const obtenerUsuarios = async () => {


        try {

            /** @type {Response} - `respuesta de la api` */
            const response = await fetch(USERS_URL);

            //  -----  si la api responde con error http  -----
            if (!response.ok) {
                throw new Error(`Error HTTP ${response.status}`);
            }

            /** @type {RespuestaUsuariosApi} - `json de la api` */
            const data = await response.json();

            return data.results.map((user, index) => {

                /** @type {Usuario} - `usuario normalizado` */
                const usuario = {
                    id: index + 1,
                    nombre: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    avatar: user.picture.large
                };

                return usuario;
            });

        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            return [];
        }
    };



    /**
     * -----------------------------
     * -----  `iniciarDemo()`  -----
     * -----------------------------
     * - Carga los usuarios, los pinta y activa el buscador.
     * @return {Promise<void>}
     */
    const iniciarDemo = async () => {

        usuarios = await obtenerUsuarios();

        //  -----  si la api no devuelve usuarios, avisar en el listado  -----
        if (usuarios.length === 0) {
            mostrarMensaje("No se han podido cargar los usuarios.");
            return;
        }

        pintarUsuarios(usuarios);

        //  -----  filtrar al escribir cada letra  -----
        $input.addEventListener("input", () => {
            filtrarUsuarios($input.value);
        });

        //  -----  evitar que el formulario recargue la página  -----
        $form.addEventListener("submit", (event) => {
            event.preventDefault();
            filtrarUsuarios($input.value);
        });
        
    };


    //  -----  al iniciar la aplicación  -----
    iniciarDemo();


})();
