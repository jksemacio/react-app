const config = require('./config');
const express = require('express');

const server = express();

server.use(express.static('build'));

server.listen(config.port, config.host, () => {
  console.log('Listening on port ', config.port)
});
