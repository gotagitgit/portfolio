const path = require("path");
const HtmWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },  
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '..', '.build'),
    filename: "bundle.js"
  },
  mode: 'development',
  plugins: [
    new HtmWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    })
  ],
};