var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',

  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.less$/,
      loader: 'style!css!postcss-loader!less'
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
