# About
  This project was created with intent to create tool that bundles your screeps code into a single file without using advanced optimizations provided by closure compiler,
  and solve the problem with unrecognizable and obfuscated runtime errors to make that errors understandable.
  
  Project uses [shadow-cljs](https://github.com/thheller/shadow-cljs) to compile code and [webpack](https://github.com/webpack/webpack) with [babel-loader](https://webpack.js.org/loaders/babel-loader/) for bundling
  
# Installation
  first you need to have [leiningen](https://leiningen.org/), [node-js](https://nodejs.org/en/)
   and java SDK installed, then go to folder with your projects and run
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
  
