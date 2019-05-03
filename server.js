const express = require('express');
const server = express();
const projectRouter = require('./data/projects-router');
const actionsRouter = require('./data/actions-router');

server.use(express.json());

server.get('/', (req, res) =>{
  res.send(
    `<h1> Welcome</h1>`
  );
});


module.exports = server;
