Webpack Development

https://webpack.js.org/guides/development/
The tools in this guide are only meant for development, please avoid using them in production!!

In order to make it easier to track down errors and warnings, JavaScript offers source maps, which maps your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

source maps: http://blog.teamtreehouse.com/introduction-source-maps

There are a lot of different options available when it comes to source maps, be sure to check them out so you can configure them to your needs.

Different options: https://webpack.js.org/configuration/devtool



Choosing a Development Tool ()

Some text editors have a "safe write" function that might interfere with some of the following tools. Read Adjusting Your text Editor for a solution to these issues：
https://webpack.js.org/guides/development/#adjusting-your-text-editor

It quickly becomes a hassle to manually run npm run build every time you want to compile your code.

There are a couple of different options available in webpack that help you automatically compile your code whenever it changes:

webpack's Watch Mode
webpack-dev-server
webpack-dev-middleware