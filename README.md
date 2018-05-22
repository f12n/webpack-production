Webpack Output Management

https://webpack.js.org/guides/output-management/

What would happen if we changed the name of one of our entry points, or even added a new one? The generated bundles would be renamed on a build, but our index.html file would still reference the old names. Let's fix that with the HtmlWebpackPlugin.

Learn more about all the features and options that the HtmlWebpackPlugin provides, then you should read up on it on the HtmlWebpackPlugin repo:
https://github.com/jantimon/html-webpack-plugin

You can also take a look at html-webpack-template which provides a couple of extra features in addition to the default template:
https://github.com/jaketrent/html-webpack-template


The Manifest
You might be wondering how webpack and its plugins seem to "know" what files are being generated. The answer is in the manifest that webpack keeps to track how all the modules map to the output bundles. If you're interested in managing webpack's output in other ways, the manifest would be a good place to start.

The manifest data can be extracted into a json file for easy consumption using the WebpackManifestPlugin:
https://github.com/danethurber/webpack-manifest-plugin

We won't go through a full example of how to use this plugin within your projects, but you can read up on the concept page:
https://webpack.js.org/concepts/manifest/

and the caching guide:
https://webpack.js.org/guides/caching
to find out how this ties into long term caching.

Conclusion

Now that you've learned about dynamically adding bundles to your HTML, let's dive into the development guide. Or, if you want to dig into more advanced topics, we would recommend heading over to the code splitting guide.

https://webpack.js.org/guides/development/
https://webpack.js.org/guides/code-splitting