const path = require("path");

const getDevServer = () => ({
  proxy: {
    "/api/": {
      target: "http://localhost:8080",
      pathRewrite: { "^/api": "" }
    }
  },
  contentBase: path.join(__dirname, "..", "src/public"),
  compress: true,
  port: 9000,
  hot: true,
  overlay: {
    warnings: true,
    errors: true
  }
});

module.exports.getDevServer = getDevServer;
