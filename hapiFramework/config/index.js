require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  firebase: process.env.DATABASE,
};

module.exports = config;
