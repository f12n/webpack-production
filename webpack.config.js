const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// npx webpack --config webpack.config.js
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output management'
        })
    ]
};