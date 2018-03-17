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
      path: path.join(__dirname, 'public/build/'),
      publicPath: '/public/build/',
      filename: 'main.bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
        }
      ],
      rules: [
        {
          test: /\.scss$/,
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
              },{
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  processors: [
                    require('autoprefixer')
                  ]
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
