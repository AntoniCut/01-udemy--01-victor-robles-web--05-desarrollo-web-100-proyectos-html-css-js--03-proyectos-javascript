/*
    *  -----------------------------------------------------------  *
    *  -----  main-49.js  --  /src/scripts/pages/main-49.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />





(() => {


    console.log("\n");
    console.warn("-----  Proyecto 49 JS  -----");
    console.log("\n");


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `contenedor de la demo` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__todo-list")
    );

    if (!$demo) {
        throw new Error("No se ha encontrado el contenedor .demo__todo-list en el HTML.");
    }

    /** @type {HTMLFormElement | null} - `formulario` */
    const $form = /** @type {HTMLFormElement | null} */ (
        $demo.querySelector(".todo-list__form")
    );

    /** @type {HTMLInputElement | null} - `input` */
    const $input = /** @type {HTMLInputElement | null} */ (
        $demo.querySelector(".todo-list__input")
    );

    /** @type {HTMLUListElement | null} - `lista de tareas` */
    const $listItems = /** @type {HTMLUListElement | null} */ (
        $demo.querySelector(".todo-list__list")
    );

    //  -----  verificación de controles  -----
    if (!$form || !$input || !$listItems) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * ---------------------------------------------
     * -----  `obtenerTareasYActualizarDOM()`  -----
     * ---------------------------------------------
     * - Obtener las tareas del Local Storage y actualizar el DOM.
     * @return {void}
     */
    const obtenerTareasYActualizarDOM = () => {

        /** @type {TaskData[]} - `tareas obtenidas del Local Storage` */
        const tasks = /** @type {TaskData[]} */ (
            JSON.parse(localStorage.getItem("tasksProyecto49JS") ?? "[]")
        );

        $listItems.replaceChildren();

        tasks.forEach((task) => {
            annadirTarea(task.text, task.completed);
        });
    };


    /**
     * ---------------------------------------------
     * -----  `guardarTareasYActualizarDOM()`  -----
     * ---------------------------------------------
     * - Guardar las tareas en el Local Storage.
     * @return {void}
     */
    const guardarTareasYActualizarDOM = () => {

        /** @type {TaskData[]} - `tareas guardadas` */
        const newTasks = /** @type {TaskData[]} */ ([]);

        /** @type {NodeListOf<HTMLDivElement>} - `contenedores de tareas actuales` */
        const listTasks = $demo.querySelectorAll(".todo-list__task");

        //  -----  Obtener los datos de las tareas del DOM  -----
        listTasks.forEach((task) => {

            /** @type {HTMLParagraphElement} - `texto de la tarea` */
            const taskText = /** @type {HTMLParagraphElement} */ (
                task.querySelector(".todo-list__text")
            );

            /** @type {HTMLInputElement} - `checkbox de la tarea` */
            const checkbox = /** @type {HTMLInputElement} */ (
                task.querySelector(".todo-list__check")
            );

            /** @type {TaskData} - `datos de la tarea` */
            const taskData = {
                text: taskText.textContent ?? "",
                completed: checkbox.checked
            };

            newTasks.push(taskData);
        });


        //  -----  Guardar las tareas en el Local Storage  -----
        localStorage.setItem("tasksProyecto49JS", JSON.stringify(newTasks));

    };


    /**
     * ----------------------------------
     * -----  `annadirTarea(text)`  -----
     * ----------------------------------
     * - Añade una tarea al DOM y la guarda en el Local Storage.
     * @param {string} text - Texto de la tarea.
     * @param {boolean} [completed=false] - Si la tarea está completada.
     * @return {void}
     */
    const annadirTarea = (text, completed = false) => {

        /** @type {HTMLLIElement} - `nueva tarea` */
        const newTask = document.createElement("li");
        
        newTask.classList.add("todo-list__item");


        /** @type {HTMLDivElement} - `contenedor de la tarea` */
        
        const taskWrapper = document.createElement("div");
        taskWrapper.classList.add("todo-list__task");


        /** @type {HTMLInputElement} - `checkbox de la tarea` */
        const checkbox = document.createElement("input");
        
        checkbox.type = "checkbox";
        checkbox.classList.add("todo-list__check");
        checkbox.checked = completed;


        /** @type {HTMLParagraphElement} - `texto de la tarea` */
        const taskText = document.createElement("p");
        
        taskText.classList.add("todo-list__text");
        taskText.textContent = text;

        if (completed) {
            taskText.classList.add("todo-list__text--completed");
        }


        /** @type {HTMLElement} - `icono de eliminar` */
        const deleteIcon = document.createElement("i");
        
        deleteIcon.classList.add("todo-list__delete", "fa-solid", "fa-trash-can");


        //  -----  Añadir los elementos al DOM  -----
        taskWrapper.appendChild(checkbox);
        taskWrapper.appendChild(taskText);
        newTask.appendChild(taskWrapper);
        newTask.appendChild(deleteIcon);

        //  -----  Añadir la tarea al DOM  -----
        $listItems.appendChild(newTask);

        //  -----  Guardar las tareas en el Local Storage  -----
        guardarTareasYActualizarDOM();

    };



    /**
     * -----------------------------------------------
     * -----  `actualizarEstadoTarea(checkbox)`  -----
     * -----------------------------------------------
     * - Marca o desmarca una tarea y actualiza el Local Storage.
     * @param {HTMLInputElement} checkbox - Checkbox de la tarea.
     * @return {void}
     */
    const actualizarEstadoTarea = (checkbox) => {

        /** @type {HTMLParagraphElement | null} - `texto de la tarea` */
        const taskText = /** @type {HTMLParagraphElement | null} */ (
            checkbox.closest(".todo-list__task")?.querySelector(".todo-list__text") ?? null
        );

        if (taskText) {
            taskText.classList.toggle("todo-list__text--completed", checkbox.checked);
        }

        guardarTareasYActualizarDOM();

    };



    /**
     * ---------------------------------------
     * -----  `eliminarTarea(taskItem)`  -----
     * ---------------------------------------
     * - Elimina una tarea del DOM y actualiza el Local Storage.
     * @param {HTMLLIElement} taskItem - Elemento li de la tarea.
     * @return {void}
     */
    const eliminarTarea = (taskItem) => {

        taskItem.remove();
        guardarTareasYActualizarDOM();
    };



    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */


    //  -----  Añadir una tarea al hacer submit al formulario  -----
    $form.addEventListener("submit", (e) => {

        e.preventDefault();

        /** - `texto de la tarea escrito en el input` */
        const task = $input.value;

        if (task.length > 0) {
            annadirTarea(task);
            $input.value = "";
        }
    });


    //  -----  Marcar o desmarcar una tarea con el checkbox  -----
    $listItems.addEventListener("change", (e) => {

        if (!(e.target instanceof HTMLInputElement)) {
            return;
        }

        if (!e.target.classList.contains("todo-list__check")) {
            return;
        }

        actualizarEstadoTarea(e.target);
    });


    //  -----  Eliminar una tarea o marcarla al pulsar el texto  -----
    $listItems.addEventListener("click", (e) => {

        if (!(e.target instanceof HTMLElement)) {
            return;
        }

        /** @type {HTMLElement | null} - `icono de eliminar pulsado` */
        const deleteIcon = e.target.closest(".todo-list__delete");

        //  -----  Si existe el icono de eliminar, eliminar la tarea  -----
        if (deleteIcon) {

            /** @type {HTMLLIElement | null} - `tarea a eliminar` */
            const taskItem = /** @type {HTMLLIElement | null} */ (
                deleteIcon.closest(".todo-list__item")
            );

            //  -----  Si existe la tarea, eliminarla  -----
            if (taskItem) {
                eliminarTarea(taskItem);
            }

            return;
        }


        /** @type {HTMLParagraphElement | null} - `texto pulsado` */
        const taskText = /** @type {HTMLParagraphElement | null} */ (
            e.target.closest(".todo-list__text")
        );

        //  -----  Si no existe el texto de la tarea, salir  -----
        if (!taskText) {
            return;
        }

        /** @type {HTMLInputElement | null} - `checkbox de la tarea` */
        const checkbox = /** @type {HTMLInputElement | null} */ (
            taskText.closest(".todo-list__task")?.querySelector(".todo-list__check") ?? null
        );

        //  -----  Si existe el checkbox, marcar o desmarcar la tarea  -----
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            actualizarEstadoTarea(checkbox);
        }

    });


    //  -----  Obtener las tareas del Local Storage al iniciar la página  -----
    obtenerTareasYActualizarDOM();


})();
