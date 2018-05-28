const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    // loads UglifyJSPlugin which was first introduced by the tree shaking guide:
    // https://webpack.js.org/guides/tree-shaking
    mode: 'production',

    // easy running benchmark tests 
    devtool: 'source-map',
    // Avoid inline-*** and eval-*** use in production as 
    // they can increase bundle size and reduce the overall performance.
    plugins: [
        // new UglifyJSPlugin({
        //     sourceMap: true
        // }),

        // equivalent to "mode: 'production' and is part of '-p'"
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[chunkHash].css",
            chunkFilename: "[id].css",
            sourcemap: true
        })
    ],
    module: {
        rules: [{
            // This plugin should be used only :
            // on production builds without style-loader in the loaders chain
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        }]
    }

});