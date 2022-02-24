This project is an example taken from

https://github.com/gndx/js-portfolio.git

## Webpack.config.js

Este archivo sirve para extender las configuraciones de webpack de ese modo se pueden agregar
plugin entre otras cosas

## Babel

npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime

- babel-loader nos permite usar babel con webpack
- @babel/core es babel en general
- @babel/preset-env trae y te permite usar las ultimas características de JavaScript
- @babel/plugin-transform-runtime te permite trabajar con todo el tema de asincronismo como ser async y await
- Debes crear el archivo de configuración de babel el cual tiene como nombre .babelrc
