/*
    *  -----------------------------------------------------------  *
    *  -----  main-50.js  --  /src/scripts/pages/main-50.js  -----  *
    *  -----------------------------------------------------------  *
*/


/// <reference path="../../../types/types.d.js" />
/// <reference path="../../../types/global.d.ts" />


(() => {


    console.log("\n");
    console.warn("-----  Proyecto 50 JS  -----");
    console.log("\n");


    /*
        *  ------------------  *
        *  -----  Data  -----  *
        *  ------------------  *
    */


    /** - `clave del carrito en el local storage` */
    const CART_STORAGE_KEY = "cartProyecto50JS";


    /** @type {Product[]} - `catálogo de productos` */
    const products = [
        
        {
            id: 0,
            title: "Camiseta",
            img: "assets/img/proyecto-50/product-1.jpg",
            stock: 5,
            price: 14.99,
            quantity: 0
        },
        
        {
            id: 1,
            title: "Cámara",
            img: "assets/img/proyecto-50/product-2.jpg",
            stock: 7,
            price: 49.99,
            quantity: 0
        },
        
        {
            id: 2,
            title: "Portátil",
            img: "assets/img/proyecto-50/product-3.jpg",
            stock: 8,
            price: 499.99,
            quantity: 0
        },
        
        {
            id: 3,
            title: "Zapatillas",
            img: "assets/img/proyecto-50/product-4.jpg",
            stock: 3,
            price: 14.99,
            quantity: 0
        }

    ];


    /** @type {Product[]} - `productos del carrito` */
    let cart = [];

    /** - `id del temporizador del mensaje de compra` */
    let feedbackTimeoutId = 0;

    /** - `id del temporizador del mensaje de stock` */
    let stockTimeoutId = 0;



    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */

    /** @type {HTMLElement | null} - `contenedor de la demo` */
    const $demo = /** @type {HTMLElement | null} */ (
        document.querySelector(".demo__shop")
    );

    if (!$demo) {
        throw new Error("No se ha encontrado el contenedor .demo__shop en el HTML.");
    }

    /** @type {HTMLSectionElement | null} - `listado de productos` */
    const $products = /** @type {HTMLSectionElement | null} */ (
        $demo.querySelector(".shop__products")
    );

    /** @type {HTMLButtonElement | null} - `botón para mostrar el carrito` */
    const $btnShowCart = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".shop__btn-cart")
    );

    /** @type {HTMLAsideElement | null} - `panel del carrito` */
    const $cart = /** @type {HTMLAsideElement | null} */ (
        $demo.querySelector(".shop__cart")
    );

    /** @type {HTMLButtonElement | null} - `botón para cerrar el carrito` */
    const $cartClose = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".shop__cart-close")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje de carrito vacío` */
    const $cartEmpty = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".shop__empty")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje de stock agotado` */
    const $cartStock = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".shop__stock")
    );

    /** @type {HTMLSectionElement | null} - `ítems del carrito` */
    const $cartProducts = /** @type {HTMLSectionElement | null} */ (
        $demo.querySelector(".shop__cart-products")
    );

    /** @type {HTMLSpanElement | null} - `precio total` */
    const $cartTotalPrice = /** @type {HTMLSpanElement | null} */ (
        $demo.querySelector(".shop__total-price")
    );

    /** @type {HTMLButtonElement | null} - `botón de comprar todo` */
    const $cartCheckout = /** @type {HTMLButtonElement | null} */ (
        $demo.querySelector(".shop__btn-checkout")
    );

    /** @type {HTMLParagraphElement | null} - `mensaje de compra realizada` */
    const $feedback = /** @type {HTMLParagraphElement | null} */ (
        $demo.querySelector(".shop__feedback")
    );


    //  -----  verificación de controles  -----
    if (
        !$products ||
        !$btnShowCart ||
        !$cart ||
        !$cartClose ||
        !$cartEmpty ||
        !$cartStock ||
        !$cartProducts ||
        !$cartTotalPrice ||
        !$cartCheckout ||
        !$feedback
    ) {
        throw new Error("No se han encontrado los elementos necesarios en el HTML.");
    }


    /**
     * ----------------------------------
     * -----  `formatPrice(value)`  -----
     * ----------------------------------
     * - Formatea un precio con dos decimales y el símbolo de euro.
     * @param {number} value - Importe a formatear.
     * @return {string}
     */
    const formatPrice = (value) => `${value.toFixed(2)} €`;


    /**
     * ----------------------------
     * -----  `findCart(id)`  -----
     * ----------------------------
     * - Busca un producto en el carrito.
     * @param {number} id - ID del producto.
     * @return {Product | null}
     */
    const findCart = (id) => {

        /** @type {number} - `índice del producto en el carrito` */
        const cartIndex = cart.findIndex((cartProduct) => cartProduct.id === id);

        if (cartIndex === -1) {
            return null;
        }

        return cart[cartIndex];
    };


    /**
     * -------------------------------
     * -----  `findProduct(id)`  -----
     * -------------------------------
     * - Busca un producto en el catálogo.
     * @param {number} id - ID del producto.
     * @return {Product | undefined}
     */
    const findProduct = (id) => products.find((product) => product.id === id);


    /**
     * --------------------------
     * -----  `saveCart()`  -----
     * --------------------------
     * - Guarda el carrito en el local storage.
     * @return {void}
     */
    const saveCart = () => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    };


    /**
     * ----------------------------------
     * -----  `showStockMessage()`  -----
     * ----------------------------------
     * - Muestra un mensaje temporal cuando no queda más stock.
     * @return {void}
     */
    const showStockMessage = () => {
        
        $cartStock.textContent = "No hay más productos disponibles";
        $cartStock.classList.add("is-visible");

        window.clearTimeout(stockTimeoutId);

        stockTimeoutId = window.setTimeout(() => {
            $cartStock.classList.remove("is-visible");
            $cartStock.textContent = "";
        }, 3000);

    };


    /**
     * ------------------------------------------
     * -----  `setEmptyCartState(isEmpty)`  -----
     * ------------------------------------------
     * - Muestra u oculta el aviso de carrito vacío.
     * @param {boolean} isEmpty - Si el carrito no tiene productos.
     * @return {void}
     */
    const setEmptyCartState = (isEmpty) => {

        //  -----  si está vacío, mostrar el aviso y limpiar el de stock  -----
        if (isEmpty) {
            $cartEmpty.classList.add("is-visible");
            $cartStock.classList.remove("is-visible");
            $cartStock.textContent = "";
        }

        else {
            $cartEmpty.classList.remove("is-visible");
        }

        $cartCheckout.disabled = isEmpty;
    };


    /**
     * ---------------------------
     * -----  `closeCart()`  -----
     * ---------------------------
     * - Cierra el carrito y muestra el botón para volver a abrirlo.
     * @return {void}
     */
    const closeCart = () => {
        $cart.classList.add("shop__cart--hide");
        $btnShowCart.classList.remove("shop__btn-cart--hide");
    };


    /**
     * --------------------------
     * -----  `openCart()`  -----
     * --------------------------
     * - Muestra el panel del carrito y oculta el botón de abrir.
     * @return {void}
     */
    const openCart = () => {
        $cart.classList.remove("shop__cart--hide");
        $btnShowCart.classList.add("shop__btn-cart--hide");
    };


    /**
     * ------------------------------
     * -----  `getTotalCart()`  -----
     * ------------------------------
     * - Obtiene el total del carrito.
     * @return {number}
     */
    const getTotalCart = () => {

        let total = 0;

        cart.forEach((cartProduct) => {

            /** @type {Product | undefined} - `producto del catálogo` */
            const product = findProduct(cartProduct.id);

            if (!product) {
                return;
            }

            total += product.price * cartProduct.quantity;
        });

        return Number(total.toFixed(2));
    };


    /**
     * ------------------------------------------
     * -----  `createProductCard(product)`  -----
     * ------------------------------------------
     * - Crea la tarjeta de un producto del catálogo.
     * @param {Product} product - Producto a pintar.
     * @return {HTMLElement}
     */
    const createProductCard = (product) => {

        /** @type {HTMLElement} - `tarjeta del producto` */
        const $article = document.createElement("article");
        
        $article.classList.add("shop__product");


        /** @type {HTMLElement} - `contenedor de la imagen` */
        const $figure = document.createElement("figure");
        
        $figure.classList.add("shop__container-img");


        /** @type {HTMLImageElement} - `imagen del producto` */
        const $img = document.createElement("img");
        
        $img.classList.add("shop__img");
        $img.src = product.img;
        $img.alt = product.title;


        /** @type {HTMLHeadingElement} - `título del producto` */
        const $title = document.createElement("h3");
        
        $title.classList.add("shop__product-title");
        $title.textContent = product.title;


        /** @type {HTMLParagraphElement} - `precio del producto` */
        const $price = document.createElement("p");
        
        $price.classList.add("shop__price");
        $price.textContent = formatPrice(product.price);


        /** @type {HTMLButtonElement} - `botón de comprar` */
        const $btn = document.createElement("button");
        
        $btn.type = "button";
        $btn.classList.add("shop__btn");
        $btn.dataset.id = String(product.id);
        $btn.textContent = "Comprar";

        //  -----  insertar los elementos en el DOM  -----
        $figure.appendChild($img);
        $article.appendChild($figure);
        $article.appendChild($title);
        $article.appendChild($price);
        $article.appendChild($btn);

        return $article;

    };


    /**
     * -------------------------------------------
     * -----  `createCartItem(cartProduct)`  -----
     * -------------------------------------------
     * - Crea el ítem de un producto dentro del carrito.
     * @param {Product} cartProduct - Producto del carrito.
     * @param {Product} product - Producto del catálogo.
     * @return {HTMLElement}
     */
    const createCartItem = (cartProduct, product) => {

        /** @type {HTMLElement} - `ítem del carrito` */
        const $article = document.createElement("article");
        
        $article.classList.add("shop__item");


        /** @type {HTMLElement} - `contenedor de la imagen` */
        const $figure = document.createElement("figure");
        
        $figure.classList.add("shop__item-img-wrap");


        /** @type {HTMLImageElement} - `imagen del producto` */
        const $img = document.createElement("img");
        
        $img.classList.add("shop__item-img");
        $img.src = product.img;
        $img.alt = product.title;


        /** @type {HTMLDivElement} - `contenido del ítem` */
        const $content = document.createElement("div");
        
        $content.classList.add("shop__item-content");


        /** @type {HTMLHeadingElement} - `título del producto` */
        const $title = document.createElement("h3");
        
        $title.classList.add("shop__item-title");
        $title.textContent = product.title;


        /** @type {HTMLDivElement} - `control de cantidad` */
        const $quantity = document.createElement("div");
        
        $quantity.classList.add("shop__quantity");


        /** @type {HTMLButtonElement} - `botón para restar` */
        const $btnMinus = document.createElement("button");
        
        $btnMinus.type = "button";
        $btnMinus.classList.add("shop__quantity-minus");
        $btnMinus.dataset.id = String(product.id);
        $btnMinus.setAttribute("aria-label", "Quitar unidad");


        /** @type {HTMLElement} - `icono de restar` */
        const $icoMinus = document.createElement("i");
        
        $icoMinus.classList.add("fa-solid", "fa-minus");
        $icoMinus.setAttribute("aria-hidden", "true");


        /** @type {HTMLSpanElement} - `cantidad actual` */
        const $quantityNumber = document.createElement("span");
        
        $quantityNumber.classList.add("shop__quantity-number");
        $quantityNumber.textContent = String(cartProduct.quantity);


        /** @type {HTMLButtonElement} - `botón para sumar` */
        const $btnPlus = document.createElement("button");
        
        $btnPlus.type = "button";
        $btnPlus.classList.add("shop__quantity-plus");
        $btnPlus.dataset.id = String(product.id);
        $btnPlus.setAttribute("aria-label", "Añadir unidad");


        /** @type {HTMLElement} - `icono de sumar` */
        const $icoPlus = document.createElement("i");
        
        $icoPlus.classList.add("fa-solid", "fa-plus");
        $icoPlus.setAttribute("aria-hidden", "true");


        /** @type {HTMLParagraphElement} - `subtotal del producto` */
        const $subtotal = document.createElement("p");
        
        $subtotal.classList.add("shop__subtotal");
        $subtotal.textContent = formatPrice(product.price * cartProduct.quantity);

        //  -----  insertar los elementos en el DOM  -----
        $btnMinus.appendChild($icoMinus);
        $btnPlus.appendChild($icoPlus);
        $quantity.appendChild($btnMinus);
        $quantity.appendChild($quantityNumber);
        $quantity.appendChild($btnPlus);
        $figure.appendChild($img);
        $content.appendChild($title);
        $content.appendChild($quantity);
        $content.appendChild($subtotal);
        $article.appendChild($figure);
        $article.appendChild($content);

        return $article;

    };


    /**
     * ------------------------------
     * -----  `showProducts()`  -----
     * ------------------------------
     * - Pinta el catálogo de productos.
     * @return {void}
     */
    const showProducts = () => {
        
        $products.replaceChildren();

        products.forEach((product) => {
            $products.appendChild(createProductCard(product));
        });

    };


    /**
     * --------------------------
     * -----  `showCart()`  -----
     * --------------------------
     * - Pinta los productos del carrito y actualiza el total.
     * @param {boolean} [shouldOpen=true] - Si debe abrir el carrito cuando hay productos.
     * @return {void}
     */
    const showCart = (shouldOpen = true) => {

        $cartProducts.replaceChildren();

        //  -----  si no hay productos, dejar el aviso de vacío y cerrar  -----
        if (cart.length === 0) {
            setEmptyCartState(true);
            $cartTotalPrice.textContent = formatPrice(0);

            if (shouldOpen) {
                closeCart();
            }

            return;
        }

        setEmptyCartState(false);

        cart.forEach((cartProduct) => {

            /** @type {Product | undefined} - `producto del catálogo` */
            const product = findProduct(cartProduct.id);

            if (!product) {
                return;
            }

            $cartProducts.appendChild(createCartItem(cartProduct, product));
        });

        $cartTotalPrice.textContent = formatPrice(getTotalCart());

        if (shouldOpen) {
            openCart();
        }
    };


    /**
     * ------------------------------------
     * -----  `addProductToCart(id)`  -----
     * ------------------------------------
     * - Añade un producto al carrito o incrementa su cantidad.
     * @param {number} id - ID del producto a añadir.
     * @return {void}
     */
    const addProductToCart = (id) => {

        /** @type {Product | undefined} - `producto del catálogo` */
        const product = findProduct(id);

        //  -----  si el producto no existe, no se añade  -----
        if (!product) {
            return;
        }

        /** @type {Product | null} - `producto encontrado en el carrito` */
        const cartProduct = findCart(id);

        //  -----  si no está en el carrito, se añade con una unidad  -----
        if (cartProduct === null) {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        //  -----  si ya está, se incrementa si queda stock  -----
        else {

            if (cartProduct.quantity >= product.stock) {
                showStockMessage();
                return;
            }

            cartProduct.quantity++;
        }

        saveCart();
        showCart();
    };


    /**
     * ---------------------------
     * -----  `addCart(id)`  -----
     * ---------------------------
     * - Añade una unidad de un producto ya presente en el carrito.
     * @param {number} id - ID del producto a añadir.
     * @return {void}
     */
    const addCart = (id) => {

        /** @type {Product | null} - `producto encontrado en el carrito` */
        const cartProduct = findCart(id);

        /** @type {Product | undefined} - `producto del catálogo` */
        const product = findProduct(id);

        //  -----  si no está en el carrito o no existe, no se añade  -----
        if (!cartProduct || !product) {
            return;
        }

        //  -----  si ya se alcanzó el stock, avisar y no incrementar  -----
        if (cartProduct.quantity >= product.stock) {
            showStockMessage();
            return;
        }

        cartProduct.quantity++;
        saveCart();
        showCart();

    };


    /**
     * ------------------------------
     * -----  `removeCart(id)`  -----
     * ------------------------------
     * - Resta una unidad o elimina el producto del carrito.
     * @param {number} id - ID del producto a restar.
     * @return {void}
     */
    const removeCart = (id) => {

        /** @type {number} - `índice del producto en el carrito` */
        const cartIndex = cart.findIndex((cartProduct) => cartProduct.id === id);

        //  -----  si el producto no está en el carrito, no se elimina  -----
        if (cartIndex === -1) {
            return;
        }

        /** @type {Product} - `producto encontrado en el carrito` */
        const cartProduct = cart[cartIndex];

        cartProduct.quantity--;

        //  -----  si la cantidad llega a 0, se elimina del carrito  -----
        if (cartProduct.quantity <= 0) {
            cart.splice(cartIndex, 1);
        }

        saveCart();
        showCart();

    };


    /**
     * -------------------------------------------
     * -----  `showPurchaseFeedback(total)`  -----
     * -------------------------------------------
     * - Muestra un mensaje temporal con el total de la compra.
     * @param {number} total - Total pagado.
     * @return {void}
     */
    const showPurchaseFeedback = (total) => {
        
        $feedback.hidden = false;
        $feedback.textContent = `Compra realizada. Total: ${formatPrice(total)}`;

        window.clearTimeout(feedbackTimeoutId);

        feedbackTimeoutId = window.setTimeout(() => {
            $feedback.hidden = true;
            $feedback.textContent = "";
        }, 3000);

    };


    /**
     * -------------------------
     * -----  `buyCart()`  -----
     * -------------------------
     * - Completa la compra, vacía el carrito y lo oculta.
     * @return {void}
     */
    const buyCart = () => {

        //  -----  si el carrito está vacío, no se compra  -----
        if (cart.length === 0) {
            return;
        }

        /** - `total de la compra` */
        const total = getTotalCart();

        cart = [];
        saveCart();
        showCart();
        showPurchaseFeedback(total);

    };


    /**
     * --------------------------
     * -----  `loadCart()`  -----
     * --------------------------
     * - Carga el carrito desde el local storage.
     * @return {void}
     */
    const loadCart = () => {

        /** @type {string | null} - `carrito guardado` */
        const rawCart = localStorage.getItem(CART_STORAGE_KEY);

        //  -----  si no hay datos guardados, pintar el carrito vacío  -----
        if (!rawCart) {
            showCart();
            return;
        }

        try {
            /** @type {unknown} - `datos parseados del local storage` */
            const parsedCart = JSON.parse(rawCart);

            //  -----  reconstruir el carrito solo con productos del catálogo  -----
            if (Array.isArray(parsedCart)) {
                
                cart = parsedCart.reduce((/** @type {Product[]} */ nextCart, item) => {

                    if (!item || typeof item !== "object") {
                        return nextCart;
                    }

                    /** @type {number} - `id guardado` */
                    const storedId = Number(/** @type {{ id?: unknown }} */ (item).id);

                    /** @type {Product | undefined} - `producto del catálogo` */
                    const product = findProduct(storedId);

                    if (!product) {
                        return nextCart;
                    }

                    /** @type {number} - `cantidad guardada` */
                    const storedQuantity = Number(/** @type {{ quantity?: unknown }} */ (item).quantity);

                    nextCart.push({
                        ...product,
                        quantity: storedQuantity > 0 ? storedQuantity : 1
                    });

                    return nextCart;
                }, []);
            }
        }

        catch {
            cart = [];
        }

        showCart();
    };


    /*
        *  ---------------------  *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */


    //  -----  click en comprar un producto del catálogo  -----
    $products.addEventListener("click", (event) => {

        if (!(event.target instanceof HTMLElement)) {
            return;
        }

        /** @type {HTMLButtonElement | null} - `botón de comprar pulsado` */
        const $btn = /** @type {HTMLButtonElement | null} */ (
            event.target.closest(".shop__btn")
        );

        if (!$btn) {
            return;
        }

        event.preventDefault();

        /** @type {number} - `id del producto` */
        const productId = Number($btn.dataset.id);

        /** @type {Product | undefined} - `producto del catálogo` */
        const product = findProduct(productId);

        //  -----  si el producto existe y tiene stock, añadirlo al carrito  -----
        if (product && product.stock > 0) {
            addProductToCart(productId);
        }
    });


    //  -----  click en sumar o restar cantidad del carrito  -----
    $cartProducts.addEventListener("click", (event) => {

        if (!(event.target instanceof HTMLElement)) {
            return;
        }

        /** @type {HTMLButtonElement | null} - `botón de restar pulsado` */
        const $btnMinus = /** @type {HTMLButtonElement | null} */ (
            event.target.closest(".shop__quantity-minus")
        );

        //  -----  si se pulsa restar, quitar una unidad  -----
        if ($btnMinus) {
            event.preventDefault();
            removeCart(Number($btnMinus.dataset.id));
            return;
        }

        /** @type {HTMLButtonElement | null} - `botón de sumar pulsado` */
        const $btnPlus = /** @type {HTMLButtonElement | null} */ (
            event.target.closest(".shop__quantity-plus")
        );

        //  -----  si se pulsa sumar, añadir una unidad  -----
        if ($btnPlus) {
            event.preventDefault();
            addCart(Number($btnPlus.dataset.id));
        }
    });


    //  -----  click en el botón para mostrar el carrito  -----
    $btnShowCart.addEventListener("click", (event) => {
        event.preventDefault();
        setEmptyCartState(cart.length === 0);
        openCart();
    });


    //  -----  click en el botón de cerrar carrito  -----
    $cartClose.addEventListener("click", (event) => {
        event.preventDefault();
        closeCart();
    });


    //  -----  click en el botón de comprar todo  -----
    $cartCheckout.addEventListener("click", (event) => {
        event.preventDefault();
        buyCart();
    });


    //  -----  pintar el catálogo y cargar el carrito guardado  -----
    showProducts();
    loadCart();


})();
