const path = require("path");

module.exports = {
  mode: "production",
  optimization: {
    usedExports: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
