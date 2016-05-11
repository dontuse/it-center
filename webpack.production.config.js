var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    //path: path.join(__dirname, 'dist'),
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production")
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      loaders: ['react-hot', 'babel'],
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('css!postcss-loader!less')
    },
    {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]!img?progressive=true'
    },
  ]
},
postcss: function () {
  return [autoprefixer({ browsers: ['last 2 versions','ie >= 9'] })];
}
};
