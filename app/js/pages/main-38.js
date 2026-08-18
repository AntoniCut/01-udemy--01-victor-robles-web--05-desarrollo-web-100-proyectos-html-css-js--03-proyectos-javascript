/*
    *  -----------------------------------------------------------  *
    *  -----  main-38.js  --  /src/scripts/pages/main-38.js  -----  *
    *  -----------------------------------------------------------  *
*/

(() => {


    console.log("\n");
    console.warn("-----  Proyecto 38 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo de sonidos` */
    const $soundsDemo = document.querySelector(".demo__sounds");


    //  -----  verificación de elementos  -----
    if (!$soundsDemo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {NodeListOf<HTMLAudioElement>} - `Audios de la demo` */
    const $audios = $soundsDemo.querySelectorAll(".sounds__audio");

    /** @type {NodeListOf<HTMLButtonElement>} - `Botones de reproducir` */
    const $btnsAudios = $soundsDemo.querySelectorAll(".sounds__btn");


    /**
     * -------------------------------
     * -----  `detenerAudios()`  -----
     * -------------------------------
     * - Pausa todos los audios y los reinicia al inicio.
     * @return {void}
     */
    const detenerAudios = () => {

        $audios.forEach(($audio) => {
            $audio.pause();
            $audio.currentTime = 0;
        });
    };


    /**
     * ----------------------------------
     * -----  `resetearBotones()`  -----
     * ----------------------------------
     * - Restaura todos los botones al estado de reproducir.
     * @return {void}
     */
    const resetearBotones = () => {

        $btnsAudios.forEach(($btn) => {
            $btn.textContent = "Reproducir";
            $btn.classList.remove("sounds__btn--playing");
            $btn.setAttribute("aria-pressed", "false");
        });
    };


    /**
     * ----------------------------------
     * -----  `vincularBotones()`  -----
     * ----------------------------------
     * - Alterna reproducir o parar en cada botón y deja un solo audio activo.
     * @return {void}
     */
    const vincularBotones = () => {

        $btnsAudios.forEach(($btn) => {

            //  -----  click en reproducir o parar  -----
            $btn.addEventListener("click", (event) => {

                event.preventDefault();

                /** @type {string | null} - `id del audio a reproducir` */
                const id = $btn.getAttribute("data-audio");

                //  -----  si no hay id, no reproducir  -----
                if (!id) {
                    return;
                }

                /** @type {HTMLAudioElement | null} - `audio seleccionado` */
                const $audio = /** @type {HTMLAudioElement | null} */ (
                    $soundsDemo.querySelector("#" + id)
                );

                //  -----  si no existe el audio, no reproducir  -----
                if (!$audio) {
                    return;
                }

                //  -----  si este audio ya suena, pararlo  -----
                if (!$audio.paused) {
                    detenerAudios();
                    resetearBotones();
                    return;
                }

                detenerAudios();
                resetearBotones();

                $audio.volume = 0.5;

                void $audio.play()
                    .then(() => {
                        $btn.textContent = "Parar";
                        $btn.classList.add("sounds__btn--playing");
                        $btn.setAttribute("aria-pressed", "true");
                    }).catch(() => {
                        resetearBotones();
                    });
            });
            
        });

        //  -----  al terminar un audio, restaurar botones  -----
        $audios.forEach(($audio) => {

            $audio.addEventListener("ended", () => {
                resetearBotones();
            });
        });
    };


    //  -----  al iniciar la aplicación  -----
    vincularBotones();


})();
