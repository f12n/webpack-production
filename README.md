Webpack Output Management

https://webpack.js.org/guides/output-management/

What would happen if we changed the name of one of our entry points, or even added a new one? The generated bundles would be renamed on a build, but our index.html file would still reference the old names. Let's fix that with the HtmlWebpackPlugin.

Learn more about all the features and options that the HtmlWebpackPlugin provides, then you should read up on it on the HtmlWebpackPlugin repo:
https://github.com/jantimon/html-webpack-plugin

You can also take a look at html-webpack-template which provides a couple of extra features in addition to the default template:
https://github.com/jaketrent/html-webpack-template