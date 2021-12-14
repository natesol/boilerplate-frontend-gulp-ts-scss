/* ------------------------------------------------------------------------------------------------ */
/* Gulp Configurations ---------------------------------------------------------------------------- */

import _gulp from 'gulp';
const { src, series, parallel, dest, watch } = _gulp;

import _gulp_sourcemaps from 'gulp-sourcemaps';
const { init, write } = _gulp_sourcemaps;
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import mustache from "gulp-mustache";

import htmlmin from 'gulp-htmlmin'; // htmlmin options: https://github.com/kangax/html-minifier#options-quick-reference

import _sass from 'sass';
import _gulp_sass from 'gulp-sass';
const sass = _gulp_sass(_sass);
import autoprefixer from 'gulp-autoprefixer';

import typescript from 'gulp-typescript';
const tsProject = typescript.createProject('tsconfig.json');
import browserify from "browserify";
import vSrc from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import tsify from "tsify";
import terser from 'gulp-terser';

import imagemin, { mozjpeg, optipng } from 'gulp-imagemin';
import imagewebp from 'gulp-webp';


/* ------------------------------------------------------------------------------------------------ */
/* Build Options Variables ------------------------------------------------------------------------ */

const html = {
    srcPath: 'src/pages/*.html',
    buildPath: 'dist',
    watchFiles: ['src/pages/*.html']
}
const scss = {
    srcPath: {
        main: 'src/styles/index.scss',
        assets: 'src/styles/assets.scss',
    },
    buildPath: 'dist/styles',
    watchFiles: ['src/styles/**/*.scss', '!src/styles/assets.scss', '!src/styles/assets']
}
const ts = {
    srcPath: {
        main: ['src/scripts/index.ts'],
        assets: ['src/scripts/assets/assets.ts', 'src/scripts/assets/**/*.ts'],
    },
    buildPath: 'dist/scripts',
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
                .pipe(rename('index.css'))
                .pipe(write('.'))
                .pipe(dest(scss.buildPath));
    },
    // Using basic TS and no bundle...
    // compileTS: async () => {
    //     return  src(ts.srcPath.main)
    //             .pipe(tsProject())
    //             .pipe(dest(ts.buildPath));
    // },
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
                .pipe(vSrc("index.js"))
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
                .pipe(htmlmin({
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true
                }))
                .pipe(dest(html.buildPath));
    },
    compileSCSS: async () => {
        return  src(scss.srcPath.main)
                .pipe(sass({outputStyle: 'compressed'}))
                .pipe(autoprefixer({ cascade: false }))
                .pipe(rename('index.min.css'))
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
                .pipe(vSrc("index.min.js"))
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


/* ------------------------------------------------------------------------------------------------ */
/* Gulp Tasks ------------------------------------------------------------------------------------- */

const watchTask = () => {
    watch(html.watchFiles, series(development.compileHTML)),
    watch(scss.watchFiles, series(development.compileSCSS)),
    watch(ts.watchFiles,   series(development.compileTS))
}
const devBuild = parallel(
    development.compileHTML,
    development.compileSCSS,
    development.compileTS,
    development.optimizeImages
);
const devWatch = series(
    devBuild,
    watchTask
);
const prodBuild = parallel(
    production.compileHTML,
    production.compileSCSS,
    production.compileTS,
    production.optimizeImages
);


export {
    devBuild as dev,
    devWatch as watch,
    prodBuild as build,
    prodBuild as default,
};


/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */