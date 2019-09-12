const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // mode: 'production',
  entry: {
    index: './example/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'llane_ui',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.s([ac])ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
        // use: [
        //   'style-loader',
        //   'css-loader',
        //   {
        //     laoder: 'sass-loader',
        //     options: {
        //       includePaths: [path.resolve(__dirname, 'stylesheets', 'include')]
        //   }
        // }]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'llane-ui',
  //     template: 'index.html'
  //   })
  // ],
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'react',
  //     root: 'React',
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'react-dom',
  //     root: 'ReactDom',
  //   }
  // }
}