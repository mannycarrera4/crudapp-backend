var webpack = require('webpack');
var path = require('path')

module.exports = {
  context: __dirname + '/public',
  entry: './index.js',
  target: 'node',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],
  module: {
   loaders: [
      {test: /\.js?$/, loader: 'babel?presets[]=es2015', exclude: /node_modules/},
      // {test: /\.js?$/, loader: 'babel?presets[]=es2015', exclude: /node_modules/},
      {test: /\.html?$/, loader: 'raw', exclude: /node_modules/},
      // {test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ], exclude: /node_modules/},
      { test: /\.(pug|jade)$/, loader: 'pug-html-loader', exclude: /node_modules/  }
    ]
  }
  // resolve: {
  //   modules: [
  //     "node_modules",
  //     path.resolve(__dirname, "node_modules/")
  //   ]
  // }
};
