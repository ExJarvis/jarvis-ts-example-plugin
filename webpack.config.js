// REF: https://medium.com/the-andela-way/how-to-set-up-an-express-api-using-webpack-and-typescript-69d18c8c4f52

const path = require("path");
const nodeExternals = require("webpack-node-externals");
// const WebpackShellPlugin = require("webpack-shell-plugin");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./src/main.ts",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  watch: NODE_ENV === "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  externals: [nodeExternals()],
  // plugins: [
  //   new WebpackShellPlugin({
  //     onBuildEnd: ["npm run:dev"],
  //   }),
  // ],
};
