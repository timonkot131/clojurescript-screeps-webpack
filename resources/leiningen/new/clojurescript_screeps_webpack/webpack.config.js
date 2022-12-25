// Note this only includes basic configuration for development mode.
// For a more comprehensive configuration check:
// https://github.com/fable-compiler/webpack-config-template

var sourceMapName = "main.js.map.js"

var path = require("path");
var webpack = require("webpack")
const {RawSource} = webpack.sources

class SourceMapFixPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(
            "SourceMapFixPlugin",
            (compilation) =>
                compilation.hooks.processAssets.tap(
                    {
                        name: "SourceMapFixPlugin",
                        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ANALYSE,
                        additionalAssets: true
                    },
                    _ => compilation.updateAsset(sourceMapName, (x) => {
                        // screeps editor complaints about these symbols, so they must be removed
                        var map = Array.from(x._value).filter(x => x != '\u2029' && x != '\u2028').join("")
                        // also editor doesn't accept raw jsons
                        return new RawSource("module.exports = " + map)
                    }, (x) => x)
                )
        )
    }
}

module.exports = {
    mode: "development",
    entry: "./build/{{namespace}}.js",
    output: {
        sourceMapFilename: sourceMapName,
        path: "{{#out}}{{/out}}",
        filename: "main.js",
    },
    target: "node",
    devtool: "source-map",
    externals: {
        "main.js.map": "require(\"main.js.map\")"
    },
    plugins: [new SourceMapFixPlugin()],
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
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"]
            }
        ]
    }
}
