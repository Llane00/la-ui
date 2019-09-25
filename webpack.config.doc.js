const path = require('path');
const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'doc')
  },
  entry: {
    example: './example/example.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'la-ui',
      template: './example/example.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin() //output.path
  ],
})