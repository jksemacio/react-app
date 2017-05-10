const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = ['react','react-dom'];

const ExtractCss = new ExtractTextPlugin('style.css');
const ExtractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css"
});

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: 'json-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractCss.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractSass.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.ejs$/,
                use: ['ejs-loader','ejs-html-loader?initialMarkup=Hello%20EJS!']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './views/index.ejs'
        }),
        ExtractCss,
        ExtractSass,
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest']
        })
    ]
};

module.exports = config;
