// Note this only includes basic configuration for development mode.
// For a more comprehensive configuration check:
// https://github.com/fable-compiler/webpack-config-template

var path = require("path");

module.exports = {
    mode: "development",
    entry: "./build/{{namespace}}.js",
    output: {
        path: "{{#out}}{{/out}}",
        filename: "main.js",
    },
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "sourceType": "unambiguous",
                        "presets": [
                            ["@babel/preset-env",
                                {
                                    "useBuiltIns": "usage",
                                    "corejs": "3"

                                }]
                        ]
                    }
                }
            }
        ]
    }
}
