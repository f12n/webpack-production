const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    plugins: [
        // equivalent to 'mode: 'production' and is part of '-p''
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
                'postcss-loader',
            ],
        }, {
            test: /\.(scss|sass)$/,
            use: [
                'style-loader', // creates style nodes from JS strings
                { loader: 'css-loader', options: { importLoaders: 2 } },
                'postcss-loader',
                'sass-loader' // compiles Sass to CSS
            ]
        }]
    }
});