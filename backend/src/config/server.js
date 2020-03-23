const Compression = require("compression");
const Cors = require("cors");
const Express = require("express");
const Helment = require("helmet");
const json = require("body-parser").json;
const urlencoded = require("body-parser").urlencoded;
const Task = require("../routes");

class Server {
  constructor() {
    this.express = Express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(Cors());
    this.express.use(Compression());
    this.express.use(Helment());
    this.express.use(json());
    this.express.use(urlencoded({extended: true}));
  }

  routes() {
    this.express.use(Task);
  }
}

module.exports = new Server().express;
