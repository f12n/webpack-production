const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    // easy running benchmark tests 
    // devtool: 'source-map',
    devtool: 'inline-source-map',
    // Avoid inline-*** and eval-*** use in production as 
    // they can increase bundle size and reduce the overall performance.
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // creates style nodes from JS strings
                { loader: 'css-loader', options: { modules: true, importLoaders: 2 } },
                'postcss-loader',
                'sass-loader' // compiles Sass to CSS
            ]
        }]
    }
});