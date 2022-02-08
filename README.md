# Front-end Project Boilerplate

This is a professional front-end template for building fast, robust, and adaptable "vanilla" web application.
This boilerplate was created to kickstart a **HTML**, **SCSS** and **TypeScript** project workflow using **Gulp 4**.

Using a set of boilerplate files when you're starting a website project can be a huge time-saver. This is my own template that I use for simple frontend applications that use **HTML**, **SCSS** and **TypeScript**.

---

## Quick Start

* Clone or download this Git repo onto your computer.
* Install [Node.js](https://nodejs.org/en/) if you don't have it yet.
* Run `npm install`.
* Run `npm start` to run the default Gulp task.

## Commands

* `dev`: build the application for *'development'*.
* `start`: watch the `/src` folder and build for *'development'* on any changes.
* `watch`: ^.
* `build`: build the application for *'production'*.
* `deploy`: run the `build` command and deploy the `/dist` folder via `gh-pages` (need to install git and remote repo first).

## Features

In this proejct, Gulp is configured to run the following functions:

* minify any HTML pages
* compile any SCSS files to a CSS bundle file
* autoprefix and minify the CSS bundle
* compile any TS files to a JS bundle file (no modules!)
* uglify the JS bundle
* optimizing any jpg/png images
* move the final files to the `/dist` folder

## File Structure

The `/src` folder file structure.

```code
├──── node_modules/
│
├──── dist/
│
└──── src/
    ├─── images/
    ├─── pages/
    ├─── scripts/
    └─── styles/
```