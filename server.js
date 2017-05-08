import config from './config';
import express from 'express';
import fs from 'fs';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

server.get('/about', (req, res) => {
  fs.readFile('./public/about.html', (err, data) => {
    res.send(data.toString());
  });
});

server.listen(config.port, () => {
  console.log('Listening on port ', config.port)
});
