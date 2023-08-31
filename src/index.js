const express = require("express");
const config = require("./config");

const app = express();

app.get("/", (req, res, next) => {
  const msg = "Hola mundo";
  res.send(`${msg}`);
});

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
