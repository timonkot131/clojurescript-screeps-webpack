# About
  This project has been developed with intent to create a tool that bundles your screeps code into a single file without using advanced optimizations provided by [Сlosure Compiler](https://developers.google.com/closure/compiler),
  and solve the problem with unrecognizable and obfuscated runtime errors to make them understandable.
  
  The project uses [shadow-cljs](https://github.com/thheller/shadow-cljs) to compile code and [webpack](https://github.com/webpack/webpack) with [babel-loader](https://webpack.js.org/loaders/babel-loader/) for bundling
  
# Installation
  First you need to have [leiningen](https://leiningen.org/), [node-js](https://nodejs.org/en/)
  and java SDK installed, then go to folder with your projects and run:
  ```
  lein new org.clojars.timonkot13/clojurescript-screeps-webpack project-name
  cd project-name
  npm install
  ```
# Usage
  You can run some of these commands which are mostly ``npx shadow-cljs build/watch`` and ``npx webpack`` aliases
  ### Build project
  ```
  npm run build
  ```
  ### Bundle project
  ```
  npm run bundle
  ```
  ### Watching project changes
  ```
  npm run build-watch
  npm run bundle-watch
 ```
# Deploying
  There are no deploying tools in the project right now, but you can modify the bundle output path in webpack.config.js
  ```
    ...
    entry: ... ,
    output: {
        path: "<your path>", // as example, you can change it to your screeps local folder,
                             // you can get it by selecting "Scripts tab" and then clicking on "Open local folder"
        filename: "main.js",
    }
  ```
  
