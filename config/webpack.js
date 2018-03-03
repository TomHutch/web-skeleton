const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve('./src/client'),
  entry: './index.js',
  output: {
    path: path.resolve('./dist/client/js'),
    filename: 'scripts.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev App',
      template: 'assets/template.html',
      filename: './../index.html',
      inject: true,
    }),
  ],
};
