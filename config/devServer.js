const path = require("path");

const getDevServer = () => ({
  proxy: {
    "/server/": {
      target: "http://localhost:8080",
      pathRewrite: { "^/server": "" }
    }
  },
  contentBase: path.join(__dirname, "..", "src/public"),
  historyApiFallback: true,
  compress: true,
  port: 9000,
  hot: true,
  overlay: {
    warnings: true,
    errors: true
  }
});

module.exports.getDevServer = getDevServer;
