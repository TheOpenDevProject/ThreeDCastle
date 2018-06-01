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
      {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            // Limit at 50k. Above that it emits separate files
            limit: 50000,
      
            // url-loader sets mimetype if it's passed.
            // Without this it derives it from the file extension
            mimetype: "application/font-woff",
      
            // Output below fonts directory
            name: "./webfonts/[name].[ext]",
          }
        },
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