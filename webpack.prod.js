const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}

module.exports = merge(common, {
    optimization: {
        /*         splitChunks: {
                    cacheGroups: {
                        styles: {
                            name: 'styles',
                            test: /\.css$/,
                            chunks: 'all',
                            enforce: true           //preload
                        }
                    }
                }, */

        splitChunks: {
            cacheGroups: {
                fooStyles: {
                    name: 'one',
                    test: (m, c, entry = 'one') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true
                },
                barStyles: {
                    name: 'two',
                    test: (m, c, entry = 'two') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true
                }
            }
        },

        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    // loads UglifyJSPlugin which was first introduced by the tree shaking guide:
    // https://webpack.js.org/guides/tree-shaking
    mode: 'production',

    // easy running benchmark tests 
    // devtool: 'source-map',
    // Avoid inline-*** and eval-*** use in production as 
    // they can increase bundle size and reduce the overall performance.
    plugins: [

        // equivalent to "mode: 'production' and is part of '-p'"
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: "[name].[chunkHash].css"

            // using contenthash for long term hash
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './index.html',
            favicon: './favicon.ico'
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