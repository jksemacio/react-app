import config from './config';
import apiRouter from './api';
import serverRender from "./serverRender";

import express from 'express';

const server = express();

server.set('view engine', 'ejs');

server.use('/api', apiRouter);
server.use('/static', express.static('build'));

server.get('/', (req, res) => {
  serverRender()
  .then( ({initialMarkup, initialData}) => {
    res.render('index', {
      initialMarkup,
      initialData
    });
  })
  .catch( error => {
    console.log(error);
  });
});

server.listen(config.port, config.host, () => {
  console.log('Listening on port ', config.port)
});
