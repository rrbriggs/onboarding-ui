path = require("path");
webpack = require("webpack");
 
module.exports = {
    mode: "development",
    watch: true,
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        publicPath: "/src/js",
        watchContentBase: true,
        hot: true,
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(js|jsx)$/,
            resolve: {
                extensions: ['.js', '.jsx']
            },
            use: {
                loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-react', '@babel/preset-env']
                // }
            }
        }]
    }
}