const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components/": ["../from4to5/src/components/"],
      "@containers/": ["../from4to5/src/containers/"],
      "@context/": ["../from4to5/src/context/"],
      "@hooks/": ["../from4to5/src/hooks/"],
      "@routes/": ["../from4to5/src/routes/"],
      "@styles/": ["../from4to5/src/styles/"],
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css|.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "stylus-loader",
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    watchFiles: ["./src/**/*", "./public/**/*"],
    liveReload: true,
    compress: true,
    port: process.env.PORT,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
};
