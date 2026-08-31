/*
    *  -----------------------------------------------------------  *
    *  -----  main-25.js  --  /src/scripts/pages/main-25.js  -----  *
    *  -----------------------------------------------------------  *
*/


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 25 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `demo de emojis aleatorios` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__emojis")
    );


    //  -----  validamos que exista la demo  -----
    if (!$demo) {
        throw new Error("No se ha encontrado la demo de emojis.");
    }


    /** @type {HTMLSpanElement | null} - `contenedor del emoji` */
    const $emojiContainer = /** @type {HTMLSpanElement | null} */ (
        $demo.querySelector(".emojis__emoji")
    );


    //  -----  validamos que exista el contenedor del emoji  -----
    if (!$emojiContainer) {
        throw new Error("No se ha encontrado el contenedor del emoji.");
    }


    /*
        *  -----------------------  *
        *  -----  Variables  -----  *
        *  -----------------------  *
    */

    /** @type {string[]} - `lista de emojis disponibles` */
    const arrEmojis = [
        "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔",
        "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "❤️‍",
        "🔥", "❤️‍", "🩹", "💯", "♨️", "💢", "💬", "👁️‍🗨️", "🗨️", "🗯️",
        "💭", "💤", "🌐", "♠️", "♥️", "♦️", "♣️", "🃏", "🀄️", "🎴",
        "🎭️", "🔇", "🔈️", "🔉", "🔊", "🔔", "🔕", "🎼", "🎵", "🎶",
        "💹", "🏧", "🚮", "🚰", "♿️", "🚹️", "🚺️", "🚻", "🚼️", "🚾",
        "🛂", "🛃", "🛄", "🛅", "⚠️", "🚸", "⛔️", "🚫", "😊", "🛑",
        "❌", "🥊", "🚀", "🏆", "⚠️"
    ];


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */

    /**
     * ---------------------------------------
     * -----  `cambiarEmojiAleatorio()`  -----
     * ---------------------------------------
     * - Asigna un emoji aleatorio al contenedor.
     * @return {void}
     */
    const cambiarEmojiAleatorio = () => {

        /** @type {number} - `índice aleatorio del array de emojis` */
        const random = Math.floor(Math.random() * arrEmojis.length);

        //  -----  mostramos por consola el total, el índice y el emoji  -----
        console.log(
            "Nº emojis => ", arrEmojis.length,
            " - índice aleatorio => ", random,
            " - emoji => ", arrEmojis[random]
        );

        //  -----  asignamos el emoji aleatorio al contenedor  -----
        $emojiContainer.textContent = arrEmojis[random];
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    //  -----  al salir el ratón, cambiar a otro emoji  -----
    $emojiContainer.addEventListener("mouseleave", () => {
        cambiarEmojiAleatorio();
    });


})();
