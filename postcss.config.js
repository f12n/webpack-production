module.exports = {
    /**
     * https://github.com/postcss/postcss-loader
     * https://github.com/postcss/postcss/issues/1062
     */
    // parser: 'sugarss',
    plugins: {
        // 'postcss-import': {}, // css-loader handles @import no need for this plugin in webpack
        'postcss-cssnext': {},
        // 'autoprefixer': {},
        'cssnano': {}
    }
}