const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: [
      './src/client/index.js',
      './src/client/styles/style.css',
    ],
  },
  output: {
    path: path.resolve('./dist/client'),
    filename: 'scripts.js',
  },
  devServer: {
    contentBase: path.resolve('./dist/client'),
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 3100,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: process.env.NODE_ENV === 'development',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dev App',
      template: 'src/client/assets/template.html',
      filename: './index.html',
      inject: true,
    }),
  ],
};
