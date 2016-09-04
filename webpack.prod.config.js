var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.join(process.cwd(), 'demo/client.js'),
  output: {
    path: './public/',
    filename: 'build.js',
  },
  cache: true,
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.png($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader?limit=8192'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}
