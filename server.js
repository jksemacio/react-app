import config from './config';
import apiRouter from './api';

import express from 'express';

const server = express();

server.set('view engine', 'ejs');

server.use('/api', apiRouter);
server.use(express.static('build'));

server.listen(config.port, () => {
  console.log('Listening on port ', config.port)
});
