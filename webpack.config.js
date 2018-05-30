const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
module.exports = {
  entry: {
    index: "./src/index.jsx",
    styles: "./src/style_inc.js"
  },

  output: {
    path: path.resolve("app"),
    filename: "[name].js"
  },

  module: {
    rules: [{
        test: /\.jsx$/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.IgnorePlugin(/locale/, /moment$/)
  ]
};