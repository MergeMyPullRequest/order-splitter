var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './webclient/webclient-main.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/, // handles html files. <link rel="import" href="path.html"> and import 'path.html';
                loader: 'wc-loader' 
                // if you are using es6 inside html use 
                // loader: 'babel-loader!wc-loader'
                // similarly you can use coffee, typescript etc. pipe wc result through the respective loader.
            },
            {
                test: /\.js$/, // handles js files. <script src="path.js"></script> and import 'path';
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // handles assets. eg <img src="path.png">
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/vertx/)
    ]
};
