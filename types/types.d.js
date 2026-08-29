/*
    *  -----------------------------------------------  *
    *  -----  types.d.js  --  /types/types.d.js  -----  *
    *  -----------------------------------------------  *
*/



/*
    *  ----------------------------  *
    *  -----  Proyecto 13 JS  -----  *
    *  ----------------------------  *
*/

/**
 * -----------------------------------
 * -----  `ConcesionarioItem`  -----
 * -----------------------------------
 * @typedef {object} ConcesionarioItem - Marca y modelos de un concesionario.
 * @property {string} marca - Nombre de la marca de coches.
 * @property {string[]} modelos - Lista de modelos disponibles.
 */



/*
    *  ----------------------------  *
    *  -----  Proyecto 19 JS  -----  *
    *  ----------------------------  *
*/

/**
 * -----------------------
 * -----  `Article`  -----
 * -----------------------
 * @typedef {object} Article - Artículo creado por el usuario.
 * @property {string} id - Identificador único del artículo.
 * @property {string} title - Título del artículo.
 * @property {string} subtitle - Subtítulo o autor del artículo.
 * @property {string} description - Descripción del artículo.
 */



/*
    *  ----------------------------  *
    *  -----  Proyecto 42 JS  -----  *
    *  ----------------------------  *
*/

/**
 * -----------------------
 * -----  `Usuario`  -----
 * -----------------------
 * @typedef {object} Usuario - Usuario listo para pintar y filtrar en el buscador.
 * @property {number} id - Identificador del usuario.
 * @property {string} nombre - Nombre completo.
 * @property {string} email - Correo electrónico.
 * @property {string} avatar - URL de la imagen de perfil.
 */


/**
 * -------------------------
 * -----  `NombreApi`  -----
 * -------------------------
 * @typedef {object} NombreApi - Nombre que devuelve Random User.
 * @property {string} first - Nombre.
 * @property {string} last - Apellido.
 */


/**
 * -----------------------
 * -----  `FotoApi`  -----
 * -----------------------
 * @typedef {object} FotoApi - Fotos que devuelve Random User.
 * @property {string} large - Foto grande.
 * @property {string} medium - Foto mediana.
 * @property {string} thumbnail - Miniatura.
 */


/**
 * --------------------------
 * -----  `UsuarioApi`  -----
 * --------------------------
 * @typedef {object} UsuarioApi - Usuario tal como lo devuelve Random User.
 * @property {NombreApi} name - Nombre y apellido.
 * @property {string} email - Correo electrónico.
 * @property {FotoApi} picture - Fotos de perfil.
 */


/**
 * ------------------------------------
 * -----  `RespuestaUsuariosApi`  -----
 * ------------------------------------
 * @typedef {object} RespuestaUsuariosApi - Respuesta de Random User al listar usuarios.
 * @property {UsuarioApi[]} results - Listado de usuarios.
 */



/*
    *  ----------------------------  *
    *  -----  Proyecto 45 JS  -----  *
    *  ----------------------------  *
*/


/**
 * ----------------------------
 * -----  `SliderAction`  -----
 * ----------------------------
 * @typedef {"up" | "down"} SliderAction - Dirección del movimiento del slider.
 */



/*

*  ----------------------------  *
*  -----  Proyecto 49 JS  -----  *
*  ----------------------------  *
*/

/**
 * -------------------------------------------------
 * -----  `TaskData`  --  `datos de la tarea`  -----
 * -------------------------------------------------
 * @typedef {Object} TaskData - `datos de la tarea`
 * @property {string} text - `texto de la tarea`
 * @property {boolean} completed - `estado del checkbox`
 */



/*
    *  ----------------------------  *
    *  -----  Proyecto 50 JS  -----  *
    *  ----------------------------  *
*/

/**
 * -----------------------
 * -----  `Product`  -----
 * -----------------------
 * @typedef {object} Product - Producto de la tienda.
 * @property {number} id - Identificador del producto.
 * @property {string} title - Título del producto.
 * @property {string} img - Ruta de la imagen del producto.
 * @property {number} stock - Unidades disponibles.
 * @property {number} price - Precio del producto.
 * @property {number} quantity - Cantidad en el carrito.
 */