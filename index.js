const endpoint = require('./network/routes');
const socket = require('./config/socket');
const { config } = require('./config');
const connect = require('./config/db');
const express = require('express');

//Express instance
const app = express();

// HTTP server
const server = require('http').Server(app);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MongoBD connection
connect();

// Initialization of sockets
socket.connect(server);

// Paths
endpoint(app);

// Static files
app.use('/', express.static('./public'));

//Node listen PORT
const PORT = config.port || 3000;
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
