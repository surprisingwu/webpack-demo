const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const resolve = (...args) => {
  return path.resolve(__dirname, ...args)
}

module.exports = {
  entry: {
    main: resolve('src/index.js')
  },
  output: {
    path: resolve('build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
    ],
 },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}