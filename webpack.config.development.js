const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: 'inline-source-map',
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = config;
