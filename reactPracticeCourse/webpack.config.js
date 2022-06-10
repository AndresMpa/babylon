const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@component": path.resolve(__dirname, "src/component/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.hmtl$/,
        use: {
          loader: "html-loader",
        },
      },
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
      {
        test: /\.([pn|sv]g|woff|woff2)$/,
        type: "asset/resource",
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/logos"),
          to: "assets/logos",
        },
        {
          from: path.resolve(__dirname, "src", "assets/icons"),
          to: "assets/icons",
        },
        {
          from: path.resolve(__dirname, "src", "assets/fonts"),
          to: "assets/fonts",
        },
      ],
    }),
  ],
};
