path = require("path");
webpack = require("webpack");
 
module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        publicPath: "/src/js",
        watchContentBase: true, // live reload
        compress: true,
        port: 9000
    },
    //devtool: "source-map", // map
    module: {
        rules: [{
            test: /\.(css)$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        },
        {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}