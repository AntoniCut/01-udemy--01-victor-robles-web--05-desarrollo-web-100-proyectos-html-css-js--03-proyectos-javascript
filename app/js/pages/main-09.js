/*
    *  ------------------------------------------------------  *
    *  -----  /main-09.js  --  /src/scripts/main-09.js  -----  *
    *  ------------------------------------------------------  *
*/

(() => {

    
    console.log('\n');
    console.warn('-----  Proyecto 9 JS  -----');
    console.log('\n');

    // ----- Referencias al HTML -----
    
    /** 
     * @type {HTMLHeadingElement|null} 
     * */
    const resultBox = document.querySelector('#result');
    
    if (!resultBox) 
        return console.error('No se encontró el elemento #result');


    /** @type {HTMLParagraphElement|null} */
    const numbersBox = document.querySelector('#numbers');
    
    if (!numbersBox) 
        return console.error('No se encontró el elemento #numbers');


    /**
     * Genera un `arreglo de números aleatorios enteros`.
     * @param {number} count - Cantidad de números.
     * @param {number} min - Valor mínimo.
     * @param {number} max - Valor máximo.
     * @returns {number[]} Array con números aleatorios.
     */
    const generateRandomNumbers = (count, min, max) =>
        Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);


    /**
     * `Suma todos los números dados y muestra resultados`.
     * @param {...number} numbers - Lista de números a sumar.
     */
    const sumAll = (...numbers) => {
        
        let result = 0;

        numbersBox.textContent = `Los números son: ${numbers.join(', ')}`;
        result = numbers.reduce((acc, num) => acc + num, 0);
        resultBox.textContent = `El resultado es: ${result}`;
        
    };



    // ----- Inicio de la lógica del proyecto -----
    setTimeout(() => {
        
        const input = prompt('¿Cuántos números quieres sumar?', '5') || '5';
        const count = parseInt(input, 10);

        if (isNaN(count) || count <= 0) {
            alert('Por favor, introduce un número válido o un número mayor que 0.');
            return;
        }

        const randomNumbers = generateRandomNumbers(count, 1, 100);
        
        //  -----  Llamada a la función para sumar y mostrar resultados  -----
        sumAll(...randomNumbers);

    }, 2000);


})();
