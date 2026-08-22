/*
    *  -----------------------------------------------------------  *
    *  -----  main-48.js  --  /src/scripts/pages/main-48.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 48 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLSectionElement | null} - `Contenedor de la demo del generador` */
    const $demo = /** @type {HTMLSectionElement | null} */ (
        document.querySelector(".demo__password")
    );


    //  -----  verificación de la demo  -----
    if (!$demo) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** @type {HTMLInputElement | null} - `control del rango` */
    const $controlRange = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".password__range")
    );

    /** @type {HTMLSpanElement | null} - `número del rango` */
    const $controlNumber = /** @type {HTMLSpanElement | null} */ (
        $demo.querySelector(".password__number")
    );

    /** @type {HTMLFormElement | null} - `formulario` */
    const $mainForm = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".password__form")
    );

    /** @type {HTMLParagraphElement | null} - `contraseña` */
    const $generatePassword = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".password__value")
    );

    /** @type {HTMLButtonElement | null} - `botón para copiar la contraseña` */
    const $copyPassword = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".password__copy")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje de feedback` */
    const $feedback = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".password__feedback")
    );

    /** @type {HTMLInputElement | null} - `checkbox de letras en minúsculas` */
    const $lowerCheckbox = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector("#password-lower")
    );

    /** @type {HTMLInputElement | null} - `checkbox de letras en mayúsculas` */
    const $upperCheckbox = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector("#password-upper")
    );

    /** @type {HTMLInputElement | null} - `checkbox de números` */
    const $numberCheckbox = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector("#password-number")
    );

    /** @type {HTMLInputElement | null} - `checkbox de símbolos` */
    const $symbolCheckbox = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector("#password-symbol")
    );


    //  -----  verificación de controles  -----
    if (
        !$controlRange ||
        !$controlNumber ||
        !$mainForm ||
        !$generatePassword ||
        !$copyPassword ||
        !$feedback ||
        !$lowerCheckbox ||
        !$upperCheckbox ||
        !$numberCheckbox ||
        !$symbolCheckbox
    ) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /** - `longitud de la contraseña` */
    let valueRange = Number($controlRange.value);

    /** - `temporizador del mensaje de feedback` */
    let feedbackTimer = 0;


    /**
     * --------------------------
     * -----  `getLower()`  -----
     * --------------------------
     * - Genera una letra aleatoria entre a y z.
     * @return {string} - Letra en minúsculas.
     */
    const getLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);


    /**
     * --------------------------
     * -----  `getUpper()`  -----
     * --------------------------
     * - Genera una letra aleatoria entre A y Z.
     * @return {string} - Letra en mayúsculas.
     */
    const getUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);


    /**
     * ---------------------------
     * -----  `getNumber()`  -----
     * ---------------------------
     * - Genera un dígito aleatorio entre 0 y 9.
     * @return {string} - Número.
     */
    const getNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);


    /**
     * ---------------------------
     * -----  `getSymbol()`  -----
     * ---------------------------
     * - Genera un símbolo aleatorio del rango ASCII 33-47.
     * @return {string} - Símbolo.
     */
    const getSymbol = () => String.fromCharCode(Math.floor(Math.random() * 15) + 33);


    /**
     * ----------------------------------------------
     * -----  `mostrarFeedback(mensaje, tipo)`  -----
     * ----------------------------------------------
     * - Muestra un mensaje de error o de éxito dentro de la demo.
     * @param {string} mensaje - Texto que verá el usuario.
     * @param {"error" | "success"} tipo - Tipo visual del mensaje.
     * @return {void}
     */
    const mostrarFeedback = (mensaje, tipo) => {

        window.clearTimeout(feedbackTimer);

        $feedback.textContent = mensaje;
        $feedback.classList.remove("password__feedback--error", "password__feedback--success");
        $feedback.classList.add(
            tipo === "error" ? "password__feedback--error" : "password__feedback--success"
        );

        //  -----  ocultar el mensaje de éxito al cabo de un rato  -----
        if (tipo === "success") {
            feedbackTimer = window.setTimeout(() => {
                $feedback.textContent = "";
                $feedback.classList.remove("password__feedback--success");
            }, 2500);
        }
    };


    /**
     * ---------------------------------
     * -----  `generarPassword()`  -----
     * ---------------------------------
     * - Construye la contraseña según las opciones marcadas en el formulario.
     * @return {void}
     */
    const generarPassword = () => {

        /** @type {string[]} - `caracteres de la contraseña` */
        const password = [];


        //  -----  comprobar que alguna opción esté seleccionada  -----
        if (
            !$lowerCheckbox.checked &&
            !$upperCheckbox.checked &&
            !$numberCheckbox.checked &&
            !$symbolCheckbox.checked
        ) {
            mostrarFeedback("Por favor, seleccione al menos una opción", "error");
            return;
        }


        //  -----  generar la contraseña con las opciones seleccionadas  -----
        let count = 0;

        do {

            if ($lowerCheckbox.checked && count < valueRange) {
                password.push(getLower());
                count++;
            }

            if ($upperCheckbox.checked && count < valueRange) {
                password.push(getUpper());
                count++;
            }

            if ($numberCheckbox.checked && count < valueRange) {
                password.push(getNumber());
                count++;
            }

            if ($symbolCheckbox.checked && count < valueRange) {
                password.push(getSymbol());
                count++;
            }

        } while (password.length < valueRange);


        //  -----  mostrar la contraseña en el html  -----
        $generatePassword.textContent = password.join("");
        $feedback.textContent = "";
        $feedback.classList.remove("password__feedback--error", "password__feedback--success");
    };


    /**
     * --------------------------------
     * -----  `copiarPassword()`  -----
     * --------------------------------
     * - Copia la contraseña al portapapeles y muestra el resultado en la demo.
     * @return {Promise<void>}
     */
    const copiarPassword = async () => {

        /** @type {string} - `texto de la contraseña visible` */
        const texto = $generatePassword.textContent ?? "";

        try {
            await navigator.clipboard.writeText(texto);
            mostrarFeedback("Contraseña copiada al portapapeles", "success");
        } catch (_error) {
            mostrarFeedback("No se pudo copiar la contraseña", "error");
        }
    };


    //  -----  evento para actualizar el valor del rango  -----
    $controlRange.addEventListener("input", () => {
        valueRange = Number($controlRange.value);
        $controlNumber.textContent = String(valueRange);
    });


    //  -----  evento para generar la contraseña  -----
    $mainForm.addEventListener("submit", (event) => {
        event.preventDefault();
        generarPassword();
    });


    //  -----  evento para copiar la contraseña al portapapeles  -----
    $copyPassword.addEventListener("click", (event) => {
        event.preventDefault();
        copiarPassword();
    });


})();
