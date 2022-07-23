const endpoint = require('./network/routes');
const express = require('express');

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
endpoint(app);

// Static files
app.use('/', express.static('./public'));

//Node listen PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
