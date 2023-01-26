import * as dotenv from 'dotenv';
dotenv.config();

export const data = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  firebase: process.env.DATABASE,
};
