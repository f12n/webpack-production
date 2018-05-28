Webpack Production

https://webpack.js.org/guides/production/


###Setup

In development, we want:
strong source mapping;
a localhost server with live reloading or hot module replacement;

In production, our goals shift to:
a focus on minified bundles
lighter weight source maps
optimized assets to improve load time. 

With this logical separation at hand, we typically recommend writing separate webpack configurations for each environment.

### Specify the Environment: process.env.NODE_ENV === 'production'

0.
 --define process.env.NODE_ENV="'production'"

1.
webpack -p

2.
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
})


### Minimize CSS
It is crucial to minimize your CSS on production, please see [Minimizing for Production](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production) section.

#### extract CSS into separate files
[MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production)


### CLI Alternatives
Some of what has been described above is also achievable via the command line. For example, the --optimize-minimize flag will include the UglifyJSPlugin behind the scenes. The --define process.env.NODE_ENV="'production'" will do the same for the DefinePlugin instance described above. And, webpack -p will automatically invoke both those flags and thus the plugins to be included.

While these short hand methods are nice, we usually recommend just using the configuration as it's better to understand exactly what is being done for you in both cases. The configuration also gives you more control on fine tuning other options within both plugins.


### TODO: 
tree shaking

### References:
[webpack-merge](https://github.com/survivejs/webpack-merge)
[devtool](https://webpack.js.org/configuration/)
Minimize CSS
It is crucial to minimize your CSS on production, please see [Minimizing for Production](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production) section.