require("dotenv").config();

module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "defaultSecret",
  },
  db: {
    port: process.env.DB_PORT || 3001,
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_NAME || "social-network",
    host: process.env.DB_HOST || "127.0.0.1",
  },
};
