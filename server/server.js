var path = require('path');
var express = require('express');
var routes = require('./routes');

//require Webpack, middleware and config
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');

var app = express();

//create compiler object using webpackConfig
var compiler = webpack(webpackConfig);

// set path for static files
app.use(express.static(path.join(__dirname, '../www')));

//use webpack middleware with our compiler object and some options
app.use(webpackDevMiddleware(compiler, {
 hot: true,
 filename: 'bundle.js',
 publicPath: '/',
 stats: {
   colors: true,
 },
 historyApiFallback: true,
}));

routes(app, express);

var port = 4000;

app.listen(port, () => {
 console.log(`server listening at ${port}`)
});
