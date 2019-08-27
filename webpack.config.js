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
        watchContentBase: true, // live reload
        hot: true,
        liveReload: true,
        compress: true,
        port: 9000
    },
    //devtool: "source-map", // map
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
<<<<<<< HEAD
                options: {
                    presets: ['@babel/preset-env', 'react']
=======
                query: {
                    presets: ['@babel/preset-env']
>>>>>>> sass
                }
            }
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}