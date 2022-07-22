const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/", (req, res) => {
  res.send("Hola");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
