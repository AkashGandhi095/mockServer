'use strict';

const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router('db.json')
const middleware = jsonServer.middleware()
const port = process.env.port || 3200;

server.use(middleware)
server.use(router)
server.listen(port)