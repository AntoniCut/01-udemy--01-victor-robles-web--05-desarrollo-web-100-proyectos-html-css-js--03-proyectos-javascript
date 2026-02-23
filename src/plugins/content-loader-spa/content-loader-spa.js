/*
    ----------------------------------------------
    ----------  /content-loader-spa/  ------------
    ----------  /content-loader-spa.js  ----------
    ----------------------------------------------
*/

//@ts-nocheck


export function contentLoaderSPA(options = {}) {

    const settings = {
        routes: [],
        base: '',
        layoutHeader: '#layoutHeader',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        draggable: false,
        ...options
    };


    // ---------------------------------------------
    // Utilidades
    // ---------------------------------------------


    const fetchHTML = async (url, selector) => {

        try {

            const res = await fetch(url);
            if (!res.ok)
                throw new Error(res.statusText);

            const html = await res.text();

            const el = document.querySelector(selector);
            if (el)
                el.innerHTML = html;

        } catch (e) {

            console.error(`❌ Error al cargar ${url}:`, e);

            const el = document.querySelector(selector);
            if (el)
                el.innerHTML = `<p>Error 404: No se pudo cargar el contenido.</p>`;
        }
    };


    const updateFavicon = (favicon) => {
        let link = document.querySelector('link[rel~="icon"]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/x-icon';
            document.head.appendChild(link);
        }
        link.href = `${favicon}?t=${Date.now()}`;
    };


    const loadStylesheet = (href) => {
        if (!document.querySelector(`link[href*="${href}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${href}?t=${Date.now()}`;
            document.head.appendChild(link);
        }
    };



    const loadScriptsIfExists = async ({ src, isModule = false, exportFunctionName = null }) => {

        try {

            const urlWithCacheBypass = `${src}?v=${Date.now()}`;

            if (isModule) {

                const module = await import(urlWithCacheBypass);
                console.log(`✅ Módulo importado: ${urlWithCacheBypass}`);

                if (exportFunctionName && typeof module[exportFunctionName] === 'function') {

                    module[exportFunctionName]();
                    console.log(`▶️ Función ${exportFunctionName} ejecutada del módulo.`);
                }

            } else {

                const script = document.createElement('script');

                script.src = urlWithCacheBypass;
                script.async = true;

                script.onload = () => console.log(`✅ Script cargado: ${urlWithCacheBypass}`);
                script.onerror = () => console.error(`❌ Error al cargar: ${urlWithCacheBypass}`);

                document.head.appendChild(script);
            }

        } catch (e) {
            console.error(`❌ Error cargando el script: ${src}`, e);
        }
    };




    // ---------------------------------------------
    // Core SPA
    // ---------------------------------------------


    const loadContent = (route) => {

        if (!document.startViewTransition)
            return loadContentWithoutViewTransition(route);

        return loadContentWithViewTransition(route);
    };


    const loadContentWithViewTransition = (route) => {
        document.startViewTransition(() => {
            return new Promise((resolve) => {
                loadTodoContentInHtml(route);
                resolve();
            });
        });
    };


    const loadContentWithoutViewTransition = (route) => {
        loadTodoContentInHtml(route);
    };


    const loadTodoContentInHtml = async (route) => {

        // Header
        if (route.urlLayoutHeader) {
            await fetchHTML(route.urlLayoutHeader, settings.layoutHeader);
            addTitleHeader(route.pageTitle || "Página sin título");
        }


        // Navbar
        if (route.urlLayoutNavbar) {
            await fetchHTML(route.urlLayoutNavbar, settings.layoutNavbar);
            actionsNavbar();
        }


        // Main
        if (route.urlLayoutMain) await fetchHTML(route.urlLayoutMain, settings.layoutMain);


        // Footer
        if (route.urlLayoutFooter) await fetchHTML(route.urlLayoutFooter, settings.layoutFooter);


        // Título y favicon
        document.title = route.pageTitle || "Página sin título";
        updateFavicon(route.favicon || "");


        // Estilos
        if (route.styles) loadStylesheet(route.styles);


        // Scripts
        if (route.scripts) {
            for (const s of route.scripts) await loadScriptsIfExists(s);
        }


        // Actualizar URL
        const newUrl = `${settings.base}${route.path}`;
        if (window.location.pathname !== newUrl) {
            history.pushState({ path: newUrl }, '', newUrl);
        }

    };




    const addTitleHeader = (title) => {
        const header = document.querySelector(`${settings.layoutHeader} #headerTitle`);
        if (header) header.textContent = title;
    };


    const actionsNavbar = () => {

        const navbar = document.querySelector(`${settings.layoutNavbar} .navbar__container`);
        const btnOpen = document.querySelector('.navbar__btn-open');
        const btnClose = document.querySelector('.navbar__btn-close');

        if (!navbar || !btnOpen || !btnClose)
            return;

        navbar.style.display = "none";
        btnClose.style.display = "none";

        btnOpen.addEventListener("click", (e) => {
            e.stopPropagation();
            btnOpen.style.display = "none";
            btnClose.style.display = "flex";
            slideDown(navbar, 1000);
        });

        btnClose.addEventListener("click", (e) => {
            e.stopPropagation();
            btnClose.style.display = "none";
            btnOpen.style.display = "flex";
            slideUp(navbar, 500);
        });

        document.addEventListener("click", (e) => {

            slideUp(navbar, 500);

            btnClose.style.display = "none";
            btnOpen.style.display = "flex";

            e.stopPropagation();

        });

    };


    function slideDown(element, duration = 300) {
        element.style.removeProperty('display');
        let display = window.getComputedStyle(element).display;
        if (display === 'none') display = 'flex';
        element.style.display = display;

        const height = element.scrollHeight;
        element.style.height = '0';
        element.style.overflow = 'hidden';
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.style.transitionTimingFunction = 'ease-in-out';
        element.offsetHeight; // Forzar reflow
        element.style.height = height + 'px';

        setTimeout(() => {
            element.style.removeProperty('height');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        }, duration);
    }


    function slideUp(element, duration = 300) {
        element.style.height = element.offsetHeight + 'px';
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.style.transitionTimingFunction = 'ease-in-out';
        element.offsetHeight; // Forzar reflow
        element.style.overflow = 'hidden';
        element.style.height = '0';
        element.style.paddingTop = '0';
        element.style.paddingBottom = '0';
        element.style.marginTop = '0';
        element.style.marginBottom = '0';

        setTimeout(() => {
            element.style.display = 'none';
            element.style.removeProperty('height');
            element.style.removeProperty('padding-top');
            element.style.removeProperty('padding-bottom');
            element.style.removeProperty('margin-top');
            element.style.removeProperty('margin-bottom');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        }, duration);
    }

    function slideToggle(element, duration = 300) {
        if (window.getComputedStyle(element).display === 'none') {
            slideDown(element, duration);
        } else {
            slideUp(element, duration);
        }
    }

  

    // ---------------------------------------------
    // Eventos
    // ---------------------------------------------

    const setupEventListeners = () => {

        document.addEventListener("click", (e) => {
            const link = e.target.closest("a[data-id]");
            if (link) {
                e.preventDefault();
                const route = settings.routes.find(r => r.id === link.dataset.id);
                if (route) loadContent(route);
            }
        });

        window.addEventListener("popstate", (e) => {
            const path = e.state?.path?.replace(settings.base, '') || window.location.pathname.replace(settings.base, '');
            const route = settings.routes.find(r => r.path === path);
            if (route) loadContent(route);
        });
    };


    const init = () => {

        console.warn("✅ Plugin SPA cargado correctamente (content-loader-spa.js)");

        const initialPath = window.location.pathname.replace(settings.base, '');

        const route = settings.routes.find(r => r.path === initialPath);
        if (route)
            loadContent(route);

        history.replaceState({ path: window.location.pathname }, '', window.location.pathname);
        setupEventListeners();

    };


    init();

}
