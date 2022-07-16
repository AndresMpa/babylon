require('dotenv').config();

const config = {
  isProd: process.env.NODE_ENV === 'production',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  apiKey: process.env.API_KEY,
  dbUrl: process.env.DB_URI,
};

module.exports = { config };
