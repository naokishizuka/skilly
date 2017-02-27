var webpack = require('webpack');

module.exports = {
  entry: {
    profile: './javascripts/profile.jsx',
  },

  output: {
    path: '../app/assets/javascripts',
    filename: '[name].js',
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
