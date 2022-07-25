const endpoint = require("../network/routes");
const config = require("../config");
const express = require("express");
const cors = require("cors");

//Express instance
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Paths
endpoint(app);

//Node listen PORT
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
