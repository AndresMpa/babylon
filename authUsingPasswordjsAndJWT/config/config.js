require('dotenv').config();

const config = {
  isProd: process.env.NODE_ENV === 'production',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URI,

  jwtSecret: process.env.JWT_SECRET,
  apiKey: process.env.API_KEY,

  mailerEmail: process.env.MAILER_EMAIL,
  mailerPassword: process.env.MAILER_PASSWORD,
};

module.exports = { config };
