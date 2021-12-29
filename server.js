"use strict";

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

const host = "0.0.0.0";
const port = process.env.PORT || 3000;

server.use(middleware);
server.use(router);
server.listen(port, host, function () {
  console.log("server started...");
});
