/*
    *  ------------------------------------------------------  *
    *  -----  /main-25.js  --  /src/scripts/main-25.js  -----  *
    *  ------------------------------------------------------  *
*/

/** - `array de emojis` */
const arrEmojis = [
    '💘', '💝', '💖', '💗', '💓', '💞', '💕', '💟', '❣️', '💔',
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '❤️‍',
    '🔥', '❤️‍', '🩹', '💯', '♨️', '💢', '💬', '👁️‍🗨️', '🗨️', '🗯️',
    '💭', '💤', '🌐', '♠️', '♥️', '♦️', '♣️', '🃏', '🀄️', '🎴',
    '🎭️', '🔇', '🔈️', '🔉', '🔊', '🔔', '🔕', '🎼', '🎵', '🎶',
    '💹', '🏧', '🚮', '🚰', '♿️', '🚹️', '🚺️', '🚻', '🚼️', '🚾',
    '🛂', '🛃', '🛄', '🛅', '⚠️', '🚸', '⛔️', '🚫', '😊', '🛑',
    '❌', '🥊', '🚀', '🏆', '⚠️'
];



(() => {


    console.log('\n');
    console.warn('-----  Proyecto 25 JS  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {HTMLSpanElement | null} - `Contenedor del emoji` */
    const $emojiContainer = document.querySelector(".emojis__emoji");


    //  -----  Validación de Referencias  -----
    if (!$emojiContainer)
        throw new Error("No se ha encontrado el elemento con la clase 'emojis__emoji' en el HTML.");


    //  -----  al pasar el ratón por encima del emoji debe colorearse  ----- 
    //  -----  y al sacar el ratón fuera debe cambiar a otro emoji     -----
    $emojiContainer.addEventListener("mouseleave", () => {

        /** @type {number} - `índice aleatorio del array de emojis` */
        const random = Math.floor(Math.random() * arrEmojis.length);

        //  -----  se muestra el número de emojis, el índice aleatorio  ----- 
        //  -----  y el emoji seleccionado por consola                   -----
        console.log(
            'Nº emojis => ', arrEmojis.length, 
            ' - índice aleatorio => ', random, 
            ' - emoji => ', arrEmojis[random]
        );

        //  -----  se asigna el emoji aleatorio al contenedor  -----
        $emojiContainer.innerHTML = arrEmojis[random];

    });


})();
