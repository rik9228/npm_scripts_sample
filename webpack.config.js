const PATH = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";
const JS_PATH = PATH.join(__dirname, "./src/assets/ts/");
const JS_DIST_PATH = PATH.join(__dirname, "./dist");

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "inline-source-map" : false,
  entry: {
    entry: JS_PATH + "main.ts",
  },
  output: {
    filename: "[name].bundle.js",
    path: PATH.join(__dirname, "dist/js"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/env",
                  {
                    modules: false,
                  },
                ],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devtool: isDevelopment ? "source-map" : "eval",
};
