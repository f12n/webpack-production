Webpack Production

https://webpack.js.org/guides/production/

Setup

In development, we want:
strong source mapping;
a localhost server with live reloading or hot module replacement;

In production, our goals shift to:
a focus on minified bundles
lighter weight source maps
optimized assets to improve load time. 

With this logical separation at hand, we typically recommend writing separate webpack configurations for each environment.
