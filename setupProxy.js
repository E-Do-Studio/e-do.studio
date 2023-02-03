const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/sendMail.php", { target: "http://localhost/" }));
};
