import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    apiKey: process.env.API_KEY,
    database: {
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      port: parseInt(process.env.DATABASE_PORT, 10),
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USER,
      uri: process.env.DATABASE_URI,
    },
    ormConfig: {
      logging: process.env.ORM_LOG === 'true',
      synchronize: process.env.ORM_SYNC === 'true',
    },
    secure: {
      secret: process.env.SECURE_SECRET || 'some random secret',
      expiration: process.env.SECURE_EXPIRATION || '10d',
    },
  };
});
