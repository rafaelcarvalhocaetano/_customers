const express = require('express');
const path = require('path');
const server = express();

server.use(express.static(__dirname + '/dist'));
server.get('/', (req, resp) => resp.sendFile(path.join(__dirname + './dist/index.html')));

server.listen(process.env.PORT || 8000);
