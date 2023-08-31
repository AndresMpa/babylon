/** @type {import('webpack').Configuration} */

const path = require("path");

module.exports = {
  name: "express-server",
  entry: "./src/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
