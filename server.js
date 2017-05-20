const express = require('express');
const server = express();

server.set('port', (process.env.PORT || 5000));

server.use(express.static(__dirname + '/build'));

server.listen(server.get('port'), function() {
  console.log('Node app is running on port', server.get('port'));
});