/*
    *  --------------------------------------------  *
    *  -----  /gulpfile.js  --  /gulpfile.js  -----  *
    *  --------------------------------------------  *
*/

import gulp from "gulp";

import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import { exec } from 'node:child_process';

import { deleteAsync } from "del";

import terser from "gulp-terser";
import cleanCSS from "gulp-clean-css";
import htmlmin from "gulp-htmlmin";

import { Transform } from 'stream';
import plumber from 'gulp-plumber';
import fs from 'fs';
import path from 'node:path';



//  -----  desestructuración de métodos de Gulp  -----
const { src, dest, watch, series, parallel } = gulp;

const sass = gulpSass(dartSass);


/**
 * ------------------------
 * -----  `paths`  --------
 * ------------------------
 * - Rutas centralizadas de origen/destino para evitar hardcode.
 */
const paths = {
    
    srcRoot: 'src',
    appRoot: 'app',
    distRoot: 'dist',

    src: {
        componentsDir: path.join('src', 'components'),
        components: path.posix.join('src', 'components', '**/*'),
        effectsDir: path.join('src', 'effects'),
        effects: path.posix.join('src', 'effects', '**/*'),
        fontsDir: path.join('src', 'fonts'),
        fonts: path.posix.join('src', 'fonts', '**/*'),
        libsDir: path.join('src', 'libs'),
        libs: path.posix.join('src', 'libs', '**/*'),
        markdownShikiDir: path.join('src', 'markdown-shiki'),
        markdownShiki: path.posix.join('src', 'markdown-shiki', '**/*'),
        pagesDir: path.join('src', 'pages'),
        pages: path.posix.join('src', 'pages', '**/*'),
        pluginsDir: path.join('src', 'plugins'),
        plugins: path.posix.join('src', 'plugins', '**/*'),
        routesDir: path.join('src', 'routes'),
        routes: path.posix.join('src', 'routes', '**/*'),
        spaDir: path.join('src', 'spa'),
        spa: path.posix.join('src', 'spa', '**/*'),
        scriptsDir: path.join('src', 'scripts'),
        scripts: path.posix.join('src', 'scripts', '**/*.js'),
        scriptsNoMap: '!' + path.posix.join('src', 'scripts', '**/*.map'),
        main: path.posix.join('src', 'main.js'),
        scssGlobals: path.posix.join('src', 'scss', 'globals.scss'),
        scssPagesDir: path.join('src', 'scss', 'pages'),
        scssPages: path.posix.join('src', 'scss', 'pages', '**/*.scss'),
        scssAll: path.posix.join('src', 'scss', '**/*.scss')
    },

    app: {
        html: path.posix.join('app', '**/*.html'),
        css: path.posix.join('app', '**/*.css'),
        js: path.posix.join('app', '**/*.js'),
        jsNoMap: '!' + path.posix.join('app', '**/*.map')
    }
};


/**
 * -------------------------
 * -----  WATCH OPTIONS  ---
 * -------------------------
 * - Opciones base para watchers de Gulp/Chokidar.
 * - Permite activar polling por variable de entorno para evitar ENOSPC en Linux.
 */

const WATCH_OPTIONS = {
    ignoreInitial: true,
    usePolling: process.env.CHOKIDAR_USEPOLLING === 'true',
    interval: Number(process.env.CHOKIDAR_INTERVAL || 250),
    awaitWriteFinish: {
        stabilityThreshold: 200,
        pollInterval: 100
    }
};



/*
    ---------------------------
    -----  🧹  --  CLEAN  -----
    ---------------------------
*/


/**
 * ---------------------------
 * -----  `cleanDist()`  -----
 * ---------------------------
 * - Elimina la carpeta dist/ y su contenido.
 */

export const cleanDist = () => deleteAsync(['dist']);


/**
 * --------------------------
 * -----  `cleanApp()`  -----
 * --------------------------
 * - Elimina la carpeta app/ y su contenido.
 */

export const cleanApp = () => deleteAsync(['app']);


/**
 * -----------------------
 * -----  `clean()`  -----
 * -----------------------
 * - Elimina en paralelo dist/ y app/.
 */

export const clean = parallel(cleanDist, cleanApp);



/**
 * ---------------------------
 * -----  `safePipe()`  ------
 * ---------------------------
 * - Evita que Gulp se detenga ante errores en las tareas.
 */

const safePipe = () => plumber({
    errorHandler: function (err) {
        console.error(err.message);
        this.emit('end');
    }
});



/**
 * ---------------------------------
 * -----  `validateFiles()`  -------
 * ---------------------------------
 * - Transform de validación no bloqueante por archivo.
 * @param {string} taskName - Nombre de la tarea para mensajes de error específicos.
 */

const validateFiles = (taskName) => new Transform({
    
    objectMode: true,
    
    transform(file, _encoding, callback) {
        
        const filePath = path.relative(process.cwd(), file.path || '');
        
        const isDirectory = Boolean(file.stat && file.stat.isDirectory && file.stat.isDirectory());

        if (isDirectory)
            return callback(null, file);

        if (file.isNull()) {
            console.warn(`[${taskName}] Archivo vacío: ${filePath}`);
            return callback(null, file);
        }

        if (file.isStream()) {
            console.warn(`[${taskName}] Stream no soportado: ${filePath}`);
            return callback(null, file);
        }

        return callback(null, file);
    }

});


/**
 * -------------------------
 * -----  èxisteDir()  -----
 * -------------------------
 * @param {string} dirPath - Ruta del directorio a verificar.
 * @returns {boolean} - True si el directorio existe, false en caso contrario.
 */

const existsDir = (dirPath) => fs.existsSync(dirPath);



/*
    -------------------------------------
    -----  📋  --  COPY  src → app  -----
    -------------------------------------
    Carpetas copiadas respetando su estructura
    dentro de app/.
*/


/**
 * --------------------------------
 * -----  `copyComponents()`  -----
 * --------------------------------
 * - Copia src/components/ → app/components/.
 */

export const copyComponents = () =>
    
    !existsDir(paths.src.componentsDir)
        ? Promise.resolve()
        : src(paths.src.components, { base: paths.srcRoot, allowEmpty: true })
            .pipe(safePipe())
            .pipe(validateFiles('copyComponents'))
            .pipe(dest(paths.appRoot));


/**
 * -----------------------------
 * -----  `copyEffects()`  -----
 * -----------------------------
 * - Copia src/effects/ → app/effects/.
 */

export const copyEffects = () =>
    
    !existsDir(paths.src.effectsDir)
        ? Promise.resolve()
        : src(paths.src.effects, { base: paths.srcRoot, allowEmpty: true })
            .pipe(safePipe())
            .pipe(validateFiles('copyEffects'))
            .pipe(dest(paths.appRoot));



/**
 * -----------------------------
 * -----  `copyFonts()`  -----
 * -----------------------------
 * - Copia src/fonts/ → app/fonts/.
 */

export const copyFonts = () =>
    
    !existsDir(paths.src.fontsDir)
        ? Promise.resolve()
        : src(paths.src.fonts, { base: paths.srcRoot, allowEmpty: true, encoding: false })
            .pipe(safePipe())
            .pipe(validateFiles('copyFonts'))
            .pipe(dest(paths.appRoot));



/**
 * -----------------------------
 * -----  `copyLibs()`  --------
 * -----------------------------
 * - Copia src/libs/ → app/libs/.
 */

export const copyLibs = () =>
    !existsDir(paths.src.libsDir)
        ? Promise.resolve()
        : src(paths.src.libs, { base: paths.srcRoot, allowEmpty: true, encoding: false })
            .pipe(safePipe())
            .pipe(validateFiles('copyLibs'))
            .pipe(dest(paths.appRoot));



/**
 * -----------------------------------
 * -----  `copyMarkdownShiki()`  -----
 * -----------------------------------
 * - Copia src/markdown-shiki/ → app/markdown-shiki/.
 */

export const copyMarkdownShiki = () =>
    !existsDir(paths.src.markdownShikiDir)
        ? Promise.resolve()
        : src(paths.src.markdownShiki, { base: paths.srcRoot, allowEmpty: true })
            .pipe(safePipe())
            .pipe(validateFiles('copyMarkdownShiki'))
            .pipe(dest(paths.appRoot));


/**
 * ---------------------------
 * -----  `copyPages()`  -----
 * ---------------------------
 * - Copia src/pages/ → app/pages/.
 */

export const copyPages = () =>
    !existsDir(paths.src.pagesDir)
        ? Promise.resolve()
        : src(paths.src.pages, { base: paths.srcRoot, allowEmpty: true })
            .pipe(safePipe())
            .pipe(validateFiles('copyPages'))
            .pipe(dest(paths.appRoot));


/**
 * -----------------------------
 * -----  `copyPlugins()`  -----
 * -----------------------------
 * - Copia src/plugins/ → app/plugins/.
 */

export const copyPlugins = () =>
    !existsDir(paths.src.pluginsDir)
        ? Promise.resolve()
        : src(paths.src.plugins, { base: paths.srcRoot, allowEmpty: true })
            .pipe(safePipe())
            .pipe(validateFiles('copyPlugins'))
            .pipe(dest(paths.appRoot));


/**
 * ----------------------------
 * -----  `copyRoutes()`  -----
 * ----------------------------
 * - Copia src/routes/ → app/routes/.
 */

export const copyRoutes = () =>
    !existsDir(paths.src.routesDir)
        ? Promise.resolve()
        : src(paths.src.routes, { base: paths.srcRoot, allowEmpty: true })
            .pipe(safePipe())
            .pipe(validateFiles('copyRoutes'))
            .pipe(dest(paths.appRoot));


/**
 * -------------------------
 * -----  `copySpa()`  -----
 * -------------------------
 * - Copia src/spa/ → app/spa/.
 */

export const copySpa = () =>
    !existsDir(paths.src.spaDir)
        ? Promise.resolve()
        : src(paths.src.spa, { base: paths.srcRoot, allowEmpty: true })
            .pipe(safePipe())
            .pipe(validateFiles('copySpa'))
            .pipe(dest(paths.appRoot));


/**
 * --------------------------
 * -----  `copyMain()`  -----
 * --------------------------
 * - Copia src/main.js → app/main.js.
 */

export const copyMain = () =>
    !fs.existsSync(paths.src.main)
        ? Promise.resolve()
        : src(paths.src.main, { allowEmpty: true })
            .pipe(safePipe())
            .pipe(validateFiles('copyMain'))
            .pipe(dest(paths.appRoot));



/**
 * -----------------------------
 * -----  `copyScripts()`  -----
 * -----------------------------
 * - Copia src/scripts/*.js → app/js/ 
 * - (renombra la carpeta scripts a js).
 */

export const copyScripts = () =>
    !existsDir(paths.src.scriptsDir)
        ? Promise.resolve()
        : src([paths.src.scripts, paths.src.scriptsNoMap], { base: paths.src.scriptsDir, allowEmpty: true })
            .pipe(safePipe())
            .pipe(validateFiles('copyScripts'))
            .pipe(dest(path.posix.join(paths.appRoot, 'js')));



/*
    ---------------------------------------
    -----  🌸  --  SCSS → app/css     -----
    ---------------------------------------
    Compila los SCSS de src y deposita
    los CSS compilados en app/css.
*/


/**
 * ---------------------
 * -----  `css()`  -----
 * ---------------------
 * - Compila src/scss/globals.scss → app/css/globals.css.
 */

export const css = () =>
    !fs.existsSync(paths.src.scssGlobals)
        ? Promise.resolve()
        : src(paths.src.scssGlobals, { sourcemaps: true, allowEmpty: true })
            .pipe(safePipe())
            .pipe(sass().on('error', sass.logError))
            .pipe(validateFiles('css'))
            .pipe(dest(path.posix.join(paths.appRoot, 'css'), { sourcemaps: true }));

            

/**
 * --------------------------
 * -----  `cssPages()`  -----
 * --------------------------
 * - Compila src/scss/pages/*.scss → app/css/pages/*.css conservando la estructura.
 */

export const cssPages = () =>
    !existsDir(paths.src.scssPagesDir)
        ? Promise.resolve()
        : src(paths.src.scssPages, {
        base: paths.src.scssPagesDir,
        sourcemaps: true
    })
        .pipe(safePipe())
        .pipe(sass().on('error', sass.logError))
        .pipe(validateFiles('cssPages'))
        .pipe(dest(path.posix.join(paths.appRoot, 'css', 'pages'), { sourcemaps: true }));


/**
 * ------------------------
 * -----  `styles()`  -----
 * ------------------------
 * - Ejecuta css() y cssPages() en paralelo.
 */
export const styles = parallel(css, cssPages);



/*
    -----------------------------------------
    -----  🔄  --  COPY ALL  src → app  -----
    -----------------------------------------
    Agrupa todas las tareas de copia y
    compilación en una sola tarea paralela.
*/



const copyAll = parallel(
    copyComponents,
    copyEffects,
    copyFonts,
    copyLibs,
    copyMarkdownShiki,
    copyPages,
    copyPlugins,
    copyRoutes,
    copySpa,
    copyScripts,
    copyMain,
    styles
);



/*
    ---------------------------------
    -----  👀  --  DEV / WATCH  -----
    ---------------------------------
    Observa src/ y sincroniza cada cambio
    en la carpeta app/ en tiempo real.
*/


/**
 * ---------------------------
 * -----  `watchTask()`  -----
 * ---------------------------
 * - Observa todos los archivos de src/ y ejecuta la tarea
 * de copia o compilación correspondiente en cada cambio.
 */

const watchTask = () => {
    watch(paths.src.components, WATCH_OPTIONS, copyComponents);
    watch(paths.src.effects, WATCH_OPTIONS, copyEffects);
    watch(paths.src.fonts, WATCH_OPTIONS, copyFonts);
    watch(paths.src.libs, WATCH_OPTIONS, copyLibs);
    watch(paths.src.markdownShiki, WATCH_OPTIONS, copyMarkdownShiki);
    watch(paths.src.pages, WATCH_OPTIONS, copyPages);
    watch(paths.src.plugins, WATCH_OPTIONS, copyPlugins);
    watch(paths.src.routes, WATCH_OPTIONS, copyRoutes);
    watch(paths.src.spa, WATCH_OPTIONS, copySpa);
    watch(paths.src.scripts, WATCH_OPTIONS, copyScripts);
    watch(paths.src.main, WATCH_OPTIONS, copyMain);
    watch(paths.src.scssAll, WATCH_OPTIONS, styles);
};


/**
 * ---------------------
 * -----  `dev()`  -----
 * ---------------------
 * - Genera app/ completa desde src/ y queda escuchando cambios en tiempo real.
 */

export const dev = series(copyAll, watchTask);


/**
 * ---------------------------
 * -----  `watchStyles()`  -----
 * ---------------------------
 * - Observa únicamente los archivos SCSS y recompila los estilos al detectar cambios.
 */

export const watchStyles = () => watch(paths.src.scssAll, WATCH_OPTIONS, styles);



/*
    -----------------------------------------
    -----  🟥  --  MINIFY  app → dist   -----
    -----------------------------------------
    Minifica el contenido de app/ y lo
    deposita en dist/ manteniendo la estructura.
*/

/**
 * --------------------------------
 * -----  `minifyRootIndex()`  -----
 * --------------------------------
 * - Minifica index.html de la raíz → dist/index.html.
 */

export const minifyRootIndex = () =>
    src('index.html', { allowEmpty: true })
        .pipe(safePipe())
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(validateFiles('minifyRootIndex'))
        .pipe(dest(paths.distRoot));


/**
 * ---------------------------
 * -----  `minifyHtml()`  -----
 * ---------------------------
 * - Minifica todos los archivos HTML de app/ → dist/ conservando la estructura.
 */

export const minifyHtml = () =>
    !existsDir(paths.appRoot)
        ? Promise.resolve()
        : src(paths.app.html, { base: '.', allowEmpty: true })
            .pipe(safePipe())
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(validateFiles('minifyHtml'))
        .pipe(dest(paths.distRoot));


/**
 * ------------------------------
 * -----  `minifyAllCss()`  -----
 * ------------------------------
 * - Minifica todos los archivos CSS de app/ → dist/ conservando la estructura.
 */

export const minifyAllCss = () =>
    !existsDir(paths.appRoot)
        ? Promise.resolve()
        : src(paths.app.css, { base: '.', allowEmpty: true })
            .pipe(safePipe())
        .pipe(cleanCSS())
        .pipe(validateFiles('minifyAllCss'))
        .pipe(dest(paths.distRoot));


/**
 * -----------------------------
 * -----  `minifyAllJs()`  -----
 * -----------------------------
 * - Minifica todos los archivos JS de app/ → dist/ conservando la estructura.
 */

export const minifyAllJs = () =>
    !existsDir(paths.appRoot)
        ? Promise.resolve()
        : src([paths.app.js, paths.app.jsNoMap], { base: '.', allowEmpty: true })
            .pipe(safePipe())
        .pipe(terser())
        .pipe(validateFiles('minifyAllJs'))
        .pipe(dest(paths.distRoot));



/**
 * ------------------------------
 * -----  `addTsNoCheck()`  -----
 * ------------------------------
 * - Agrega //@ts-nocheck al inicio de los archivos JS en modo desarrollo.
 * - Solo se ejecuta cuando NODE_ENV === 'development'.
 * @param {() => void} cb - Callback de Gulp para indicar que la tarea ha terminado.
 */

export function addTsNoCheck(cb) {

    //  -----  Solo ejecutar en desarrollo  -----
    if (process.env.NODE_ENV === 'development') {
        
        exec('node addTsNoCheck.js', (err, stdout, stderr) => {
            
            if (err) {
                console.error(err);
                return cb(err);
            }
            console.log(stdout);
            console.error(stderr);
            cb();
        });

    }
         
    else 
        cb();
}



/*
    ---------------------------
    -----  🚀  --  BUILD  -----
    ---------------------------
    1. Limpia dist/ y app/
    2. Copia y compila src/ → app/
    3. Minifica app/ → dist/
*/


/**
 * -----------------------
 * -----  `build()`  -----
 * -----------------------
 * Genera el build de producción en tres pasos:
 * 1. Limpia dist/ y app/.
 * 2. Copia y compila src/ → app/.
 * 3. Minifica app/ → dist/.
 */
export const build = series(
    parallel(cleanDist, cleanApp),
    copyAll,
    parallel(
        minifyAllJs,
        minifyAllCss,
        minifyRootIndex,
        minifyHtml
    )
);



/*  
    ------------------------------
    -----  🔥  DEFAULT TASK  -----
    ------------------------------
    Ejecuta `build()` por defecto al correr `gulp` sin argumentos.
*/
export default build;
