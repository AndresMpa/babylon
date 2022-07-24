const endpoint = require('./network/routes');
const { config } = require('./config');
const connect = require('./config/db');
const express = require('express');

connect();
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
endpoint(app);

// Static files
app.use('/', express.static('./public'));

//Node listen PORT
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
