const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".tsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
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
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        type: "asset",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      new CSSMinimizerPlugin({
        filename: "assets/[name].css",
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [["optipng", { optimizationLevel: 5 }]],
          },
        },
      }),
      new CleanWebpackPlugin(),
    ],
    chunks: "all",
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: "all",
          name: "commons",
          filename: "assets/common.[chunkhash].js",
          reuseExistingChunk: true,
          enforce: true,
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name: "vendors",
          filename: "assets/vendor.[chunkhash].js",
          reuseExistingChunk: true,
          enforce: true,
          priority: 10,
        },
      },
    },
  },
};
