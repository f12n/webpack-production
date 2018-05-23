const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // easy running benchmark tests 
    devtool: 'source-map',
    // Avoid inline-*** and eval-*** use in production as 
    // they can increase bundle size and reduce the overall performance.
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
});