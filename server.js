import config from './config';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

server.get('/about', (req, res) => {
  res.send('The about page.');
});

server.listen(config.port, () => {
  console.log('Listening on port ', config.port)
});
