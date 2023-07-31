const path = require("path");
const HTMLwebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HTMLwebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    filename: "./bundle.js",
    library: "ui",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  mode: "production",
};
