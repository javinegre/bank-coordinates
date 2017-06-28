const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const AppCachePlugin = require('appcache-webpack-plugin');

const MANIFEST_FILENAME = 'bank-coord.appcache';

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      MANIFEST_FILENAME
    }),
    new AppCachePlugin({
      cache: [],
      network: null,  // No network access allowed!
      settings: ['prefer-online'],
      output: MANIFEST_FILENAME
    })
  ]
};