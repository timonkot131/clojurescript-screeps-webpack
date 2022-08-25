(ns {{namespace}})
(defn my-loop [] (js/console.log "hello screeps!"))
(set! js/global.__module.exports.loop my-loop)
