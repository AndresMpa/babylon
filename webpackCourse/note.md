This project is an example taken from

https://github.com/gndx/js-portfolio.git

## Webpack.config.js

Este archivo sirve para extender las configuraciones de webpack de ese modo se pueden agregar
plugin entre otras cosas

## CLI

Webpack comes with a CLI call webpack once it is installed, so to use it you type "npx webpack"
also you can use scripts inside package.json to make this easier

npm i webpack webpack-cli -D 

## Babel

```
npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

- babel-loader nos permite usar babel con webpack
- @babel/core es babel en general
- @babel/preset-env trae y te permite usar las ultimas características de JavaScript
- @babel/plugin-transform-runtime te permite trabajar con todo el tema de asincronismo como ser async y await
- Debes crear el archivo de configuración de babel el cual tiene como nombre .babelrc

## HTML Webpack

Ayuda a poder usar HTML en webpack, ya que este no esta por defecto

```
npm i html-webpack-plugin -D
```

## CSS Webpack

Este plugin ayuda a que webpack pueda procesar directamente el CSS que se tiene, esto además hace que no se tenga
que cargar el CSS sobre HTML, pues se puede montar directamente sobre el archivo main.js que es el archivo que
genera webpack al final

```
npm i mini-css-extract-plugin css-loader -D
npm i node-sass sass-loader -D
npm i stylus-loader -D
```

## Copy webpack

Este plugin ayuda a mover archivos a carpetas para poder tener assent dentro de dist

```
npm i copy-webpack-plugin -D
```

## URL loader

Las URL han de ser relativas para no depender de otros recursos de internet, para ello se han de establecer nuevos
paths que sean relativos al nuevo dist, esto sirve tanto para imagenes como para fuentes

```
npm install url-loader file-loader -D
```

## Minimizer

Los minimizer sirven para comprimir codigo esencialmente optimizan el codigo para que funcione más rapido, webpack
suguiere usar

```
npm i css-minimizer-webpack-plugin terser-webpack-plugin -D

```

## Alias

It comes with webpack, such as Vue dynamic import it helps you to write less code or simplify importing references

## Modes

Webpack come with different development modes: "production", "development", etc... Also wthere are flags like watch
made for help devs to see whats going on

## Environmental variables

Those are variable created on a base file call .env are used to make easier deployment process

## Deploy

The final propouse of using webpack is manage the creation of an application, using netlify we can see this process
