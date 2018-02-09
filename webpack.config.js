var path = require('path');
var webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION ?   [ './src/main.js']
      : [
        './src/main.js',
        'webpack/hot/dev-server.js',
        'webpack-dev-server/client?http://codefair.local:80'
];

var plugins = PRODUCTION  ?    []
      :    [ new webpack.HotModuleReplacementPlugin() ];

module.exports = {
  entry: entry,
  plugins: plugins,
  module: {
    loaders: [
      {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/'
    }
  ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.bundle.js'
  }
};
