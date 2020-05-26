const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // Needed to get VSCode debugging to work
    context: path.join(__dirname, "src"),
    mode: "development",
    devtool: "source-map",
    entry: path.join(__dirname, "src", "js", "main.ts"),

    // Build settings
    output: {
        filename: "main.js",
        path: path.join(__dirname, "src", "js"),
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    // Copy in css files so npm keeps them up to date for us
    // path.join doesnt seem to work too well so use relative paths here
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    // Bootstrap
                    from: "../node_modules/bootstrap/dist/css/bootstrap.min*",
                    to: "../css/[name].[ext]"
                }
            ],
            options: {
                concurrency: 100,
            }
        }),
    ]
};