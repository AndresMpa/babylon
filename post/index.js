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
app.use("/api", router);

// Errors
//app.use(errors);

//Node listen PORT
const PORT = config.microservice.post.port || 3002;
app.listen(PORT, () => {
  console.log(`Post service running on port ${PORT}`);
});
