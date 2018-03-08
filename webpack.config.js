var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin =  require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');



var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';


var entry = PRODUCTION ?   [ './src/js/main.js']
: [
  './src/js/main.js',
  'webpack/hot/dev-server.js',
  'webpack-dev-server/client?http://codefair.local:80'
];

var plugins = PRODUCTION  ?    [
  new UglifyJSPlugin(),
  new ExtractTextPlugin(
    {
      filename: 'main.bundle.css'
    })
  ]
  :    [ new webpack.HotModuleReplacementPlugin() ];

  plugins.push(
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION)
    })
  );

  module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    output: {
      path: path.join(__dirname, 'dist/'),
      publicPath: '/dist/',
      filename: 'main.bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          exclude: '/node_modules/'
        }
      ],
      rules: [
        {
          test: /\.scss$/,
          exclude: path.resolve(__dirname, "node_modules"),
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:[
              {
                loader: 'css-loader',
                options: {
                  url: false,
                  minimize: true,
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader', options: {
                  watch: true,
                  sourceMap: true
                }
              }]
            })
          }
        ]
      }
    };
