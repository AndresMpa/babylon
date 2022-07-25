require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',

  port: process.env.PORT || 3000,

  appHost: process.env.APP_HOST,
  appRoute: process.env.APP_ROUTE,
  appFiles: process.env.APP_FILES,

  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  uri: process.env.MONGO_URI,
};

module.exports = { config };
