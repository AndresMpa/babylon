import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      connection: process.env.DATABASE_CONNECTION,
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USER,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      databaseName: process.env.DATABASE_NAME,
    },
  };
});
