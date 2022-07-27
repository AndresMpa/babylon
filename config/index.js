require("dotenv").config();

module.exports = {
  remote: process.env.REMOTE || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "defaultSecret",
  },
  db: {
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_NAME || "social-network",
    host: process.env.DB_HOST || "127.0.0.1",
  },
  cache: {
    host: process.env.DB_HOST || "127.0.0.1",
    password: process.env.DB_PASSWORD || "admin",
  },
  microservice: {
    db: {
      port: process.env.MS_DB_PORT || 3001,
      host: process.env.DB_HOST || "127.0.0.1",
    },
    post: {
      port: process.env.MS_POST_PORT || 3002,
    },
    cache: {
      port: process.env.MS_CACHE_PORT || 3003,
      host: process.env.CACHE_HOST || "127.0.0.1",
    }
  },
};
