const errors = require("../network/error");
const config = require("../config");
const router = require("./routes");
const express = require("express");
const cors = require("cors");

//Express instance
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/", router);

// Errors
app.use(errors);

// Microservice runnig on PORT
const PORT = config.microservice.db.port;
app.listen(PORT, () => {
  console.log(`Batabase service running on port ${PORT}`);
});
