(ns {{namespace}}
  (:require [screeps.sourcemap :as sourcemap] ))
(defn my-loop [] (js/console.log "hello screeps!"))
(set! js/global.__module.exports.loop my-loop)

(sourcemap/enable (js/require "main.js.map"))