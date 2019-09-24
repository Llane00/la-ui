const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: './example/example.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'llane-ui',
      template: './example/example.html'
    }),
    new CleanWebpackPlugin() //output.path
  ],
})