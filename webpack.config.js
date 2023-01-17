const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this",
    library: "xctool"
  }
};
