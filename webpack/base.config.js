const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//var publicPath = '/static/';
//var cssName = process.env.NODE_ENV === 'production' ? 'styles.css' : 'styles.css';

module.exports = {
  entry: {
      app: './src/app.js',
      apps: './src/apps.js',
      backapp: './src/backapp.js'
  },
  output: {
    path: __dirname,
    filename: "../public/assets/[name].bundle.js"
  },
  watch: true,
  watchOptions : {
    aggregateTimeout: 100, // wait so long for more changes
    //poll: true // use polling instead of native watchers
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'
      },
      {
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader: 'url?prefix=font/&limit=10000'
      },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../public/stylesheets/style.css")
  ]
};
