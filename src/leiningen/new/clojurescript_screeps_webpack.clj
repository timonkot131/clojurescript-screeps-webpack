(ns leiningen.new.clojurescript-screeps-webpack
  (:require [leiningen.new.templates :as tmpl]
            [leiningen.core.main :as main]))

(def render (tmpl/renderer "clojurescript_screeps_webpack"))
(defn clojurescript-screeps-webpack
  "FIXME: write documentation"
  [name]
  (let [data {
              :out (fn [_] (str (-> (System/getProperty "leiningen.original.pwd")
                                    (clojure.java.io/file name) (.getPath))
                                "/out") )
              :name name 
              :namespace (tmpl/multi-segment (tmpl/sanitize-ns name))
              :sanitized (tmpl/name-to-path name)}]
    (main/info "Generating fresh 'lein new' org.clojars.timonkot13/clojurescript-screeps-webpack project.")
    (tmpl/->files data
                  ["package.json" (render "package.json" data)]
                  ["src/{{sanitized}}/core.cljs" (render "core.cljs" data)]
                  ["project.clj" (render "project.clj" data)]
                  ["shadow-cljs.edn" (render "shadow-cljs.edn" data)]
                  ["webpack.config.js" (render "webpack.config.js" data)])))
