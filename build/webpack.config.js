const { resolve } = require("path");
module.exports = {
  entry: resolve("src/main.ts"),
  output: {
    path: resolve("dist", "webpack-output"),
    filename: "webpack.output.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /styles.css$/i,
        use: [
          {
            loader: "css-loader",
            options: {
              //   url:false
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        type: "asset/resource",
      },
    ],
  },
};
