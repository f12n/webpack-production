const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // entry: ['babel-polyfill', './src/index.jsx'],
    entry: {
        index: "./src/root.jsx",
        one: './src/components/one.jsx',
        two: './src/components/two.jsx'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".sass", ".scss"]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './index.html',
            favicon: './favicon.ico'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            /* {
                            test: /\.s?[ac]ss$/,
                            use: [
                                'style-loader',
                                'css-loader',
                                'postcss-loader',
                                'sass-loader',
                            ],
                        }, */
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }
            }
        ]
    }
};