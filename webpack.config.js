var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.less?$/,
      loaders: [ 'style', 'css', 'less' ],
      include: __dirname
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loaders: [ 'url' ],
      include: __dirname
    }]
  }
};
