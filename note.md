## Webpack.config.js

This file is used to extend default webpack config, creating our own config for each mode, also
you can add plugins and some other features

## CLI

Webpack comes with a CLI call webpack once it is installed, so to use it you type "npx webpack"
also you can use scripts inside package.json to make this easier

```
npm i webpack webpack-cli -D
```

## Babel

Babel is mandatory base for all the projects, it helps you to make your JS file readable by all
the JS standars, it have to be configurated on .babelrc

```
npm i babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
```

- babel-loader enable bable on webpack
- @babel/core it babel core
- @babel/preset-env extends JavaScript from last changes
- @babel/plugin-transform-runtime enable async/await

## HTML Webpack

It enable HTML file for wabpack, it's necessary to make frontend apps

```
npm i html-webpack-plugin -D
```

## CSS Webpack

Webpack by default can't handle CSS, this plugin allows webpack to handle that file type,
as a plus allow our index.js to import css files

```
npm i mini-css-extract-plugin css-loader -D
npm i node-sass sass-loader -D
npm i stylus-loader -D
```

## Copy webpack

Sometimes is necessary to copy files from our project's file system into our dist dir, this plugin
allow you to copy those files from your file system into that dir

```
npm i copy-webpack-plugin -D
```

## URL loader

URLs should be relative references to files inside our dist, it help our application to be
independent from other resources, also it speeds up our apps when we use service workerss

```
npm i url-loader file-loader -D
```

## Minimizer

Minimizer compress code essentially to optimize, this way code works faster
suguiere usar

```
npm i css-minimizer-webpack-plugin terser-webpack-plugin -D
```

## Alias

It comes with webpack, such as Vue dynamic import it helps you to write less code or simplify
importing references

## Modes

Webpack come with different development modes: "production", "development", etc... Also wthere
are flags like watch made for help devs to see whats going on

## Environmental variables

Those are variable created on a base file call .env are used to make easier deployment process

## Deploy

The final propouse of using webpack is manage the creation of an application, using netlify we
can see this process

## Dev Server

It's common to want to use a server to see changes also to check how is the app going on local
for that propouse we
use devServer which is an interactive local server for webpack

```
npm i webpack-dev-server -D
```

## Analizer

Analyzer are useful dev tools to see in a very efficient way what's going to with our project,
it's as simple as an image but it's useful to optimize some issue we may find

```
npm i webpack-bundle-analyzer -D
```

There's also an interesting feature call dev tools, it helps us to find source code, it's useful
to debug our apps

### Note

This project is an example taken from

https://github.com/gndx/js-portfolio.git
