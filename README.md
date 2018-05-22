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

Using webpack-dev-server

Now we can run “npm start" from the command line and we will see our browser automatically loading up our page. If you now change any of the source files and save them, the web server will automatically reload after the code has been compiled. Give it a try!

TODO:
The webpack-dev-server comes with many configurable options. Head over to the documentation to learn more:
https://webpack.js.org/configuration/dev-server

Now that your server is working, you might want to give Hot Module Replacement a try:
https://webpack.js.org/guides/hot-module-replacement


Using webpack-dev-middleware

webpack-dev-middleware is a wrapper that will emit files processed by webpack to a server. This is used in webpack-dev-server internally, however it's available as a separate package to allow more custom setups if desired. 


Adjusting Your Text Editor

When using automatic compilation of your code, you could run into issues when saving your files. Some editors have a "safe write" feature that can potentially interfere with recompilation.

To disable this feature in some common editors, see the list below:

Sublime Text 3 - Add atomic_save: "false" to your user preferences.
IntelliJ - use search in the preferences to find "safe write" and disable it.
Vim - add :set backupcopy=yes to your settings.
WebStorm - uncheck Use "safe write" in Preferences > Appearance & Behavior > System Settings.


Conclusion

Now that you've learned how to automatically compile your code and run a simple development server, you can check out the next guide, which will cover Hot Module Replacement：
https://webpack.js.org/guides/hot-module-replacement