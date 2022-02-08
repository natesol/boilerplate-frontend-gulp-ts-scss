/* ------------------------------------------------------------------------------------------------ */
/* Gulp Configurations ---------------------------------------------------------------------------- */

import gulp from 'gulp';
const { src, series, parallel, dest, watch } = gulp;

import _gulp_sourcemaps from 'gulp-sourcemaps';
const { init, write } = _gulp_sourcemaps;
import rename from 'gulp-rename';
import replace from 'gulp-replace';

import htmlmin from 'gulp-htmlmin'; // htmlmin options: https://github.com/kangax/html-minifier#options-quick-reference

import _sass from 'sass';
import _gulp_sass from 'gulp-sass';
const sass = _gulp_sass(_sass);
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import purgecss from 'gulp-purgecss';

import typescript from 'gulp-typescript';
const tsProject = typescript.createProject('tsconfig.json');
import browserify from "browserify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import tsify from "tsify";
import terser from 'gulp-terser';

import imagemin, { mozjpeg, optipng } from 'gulp-imagemin';
import imagewebp from 'gulp-webp';

import browserSync from 'browser-sync';



/* ------------------------------------------------------------------------------------------------ */
/* Build Options Variables ------------------------------------------------------------------------ */

const html = {
    srcPath: 'src/pages/*.html',
    buildPath: 'dist',
    buildName: 'index',
    watchFiles: ['src/pages/*.html']
}
const scss = {
    srcPath: {
        main: 'src/styles/index.scss',
        assets: 'src/styles/assets.scss',
    },
    buildPath: 'dist/styles',
    buildName: 'styles',
    watchFiles: ['src/styles/**/*.scss', '!src/styles/assets.scss', '!src/styles/assets']
}
const ts = {
    srcPath: {
        main: ['src/scripts/index.ts'],
        assets: ['src/scripts/assets/assets.ts', 'src/scripts/assets/**/*.ts'],
    },
    buildPath: 'dist/scripts',
    buildName: 'app',
    watchFiles: ['src/scripts/*.ts', '!src/scripts/assets']
}


/* ------------------------------------------------------------------------------------------------ */
/* Gulp Functions --------------------------------------------------------------------------------- */

const development = {
    compileHTML: async () => {
        return  src(html.srcPath)
                .pipe(dest(html.buildPath));
    },
    compileSCSS: async () => {
        return  src(scss.srcPath.main)
                .pipe(init())
                .pipe(sass())
                .pipe(postcss([autoprefixer()]))
                .pipe(rename(`${scss.buildName}.css`))
                .pipe(write('.'))
                .pipe(dest(scss.buildPath));
    },
    compileTS: async () => {
        return  browserify({
                    basedir: ".",
                    debug: true,
                    entries: [ts.srcPath.main],
                    cache: {},
                    packageCache: {},
                })
                .plugin(tsify)
                .bundle()
                .on('error', (err) => { console.error(err.toString()) })
                .pipe(source(`${ts.buildName}.js`))
                .pipe(dest(ts.buildPath));
    },
    optimizeImages: async () => {
        return  src('src/images/*.{jpg,png}')
                .pipe(imagewebp())
                .pipe(dest('dist/images'));
    }
}


const production = {
    compileHTML: async () => {
        return  src(html.srcPath)
                .pipe(replace(`href="styles/${scss.buildName}.css"`,`href="styles/${scss.buildName}.min.css"`))
                .pipe(replace(`src="scripts/${ts.buildName}.js"`,`src="scripts/${ts.buildName}.min.js"`))
                .pipe(htmlmin({
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true
                }))
                .pipe(dest(html.buildPath));
    },
    compileSCSS: async () => {
        return  src(scss.srcPath.main)
                .pipe(sass())
                .pipe(postcss([
                    autoprefixer(),
                    cssnano()
                ]))
                .pipe(rename(`${scss.buildName}.min.css`))
                .pipe(purgecss({content: [html.srcPath]}))
                .pipe(dest(scss.buildPath));
    },
    compileTS: async () => {
        return  browserify({
                    basedir: ".",
                    debug: true,
                    entries: [ts.srcPath.main],
                    cache: {},
                    packageCache: {},
                })
                .plugin(tsify)
                .bundle()
                .on('error', (err) => { console.error(err.toString()) })
                .pipe(source(`${ts.buildName}.min.js`))
                .pipe(buffer())
                .pipe(terser())
                .pipe(dest(ts.buildPath));
    },
    optimizeImages: async () => {
        return  src('src/images/*.{jpg,png}')
                .pipe(imagemin([
                    mozjpeg({ quality: 85, progressive: true }),
                    optipng({ optimizationLevel: 2 }),
                ]))
                .pipe(imagewebp())
                .pipe(dest('dist/images'));
    }
}


const browsersync = {
    serve: async (cb) => {
        browserSync.init({
            server: {
                baseDir: "./dist"
            }
        });
        cb();
    },

    reload: async (cb) => {
        browserSync.reload();
        cb();
    }
}

/* ------------------------------------------------------------------------------------------------ */
/* Gulp Tasks ------------------------------------------------------------------------------------- */

const watchTask = () => {
    watch(html.watchFiles, series(development.compileHTML, browsersync.reload)),
    watch(scss.watchFiles, series(development.compileSCSS, browsersync.reload)),
    watch(ts.watchFiles,   series(development.compileTS, browsersync.reload))
}
const developmentBuild = parallel(
    development.compileHTML,
    development.compileSCSS,
    development.compileTS,
    development.optimizeImages
);
const developmentWatch = series(
    developmentBuild,
    browsersync.serve,
    watchTask
);
const productionBuild = parallel(
    production.compileHTML,
    production.compileSCSS,
    production.compileTS,
    production.optimizeImages
);


export {
    developmentBuild as dev,
    developmentWatch as watch,
    productionBuild as build,
    productionBuild as default,
};


/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */