const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'min'),
    library: `${pkg.name}`,
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [

    new webpack.optimize.UglifyJsPlugin({
      compress: { screw_ie8: false },
      mangle: { except: ['$'] },
      support_ie8: true
    })

  ]

}

module.exports = config