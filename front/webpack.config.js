module.exports = {
  entry: {
    application: './javascripts/application.jsx',
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
}
