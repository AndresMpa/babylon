import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const connectionSource = new DataSource({
  type: 'postgres',
  port: parseInt(configService.get('DATABASE_PORT'), 10),
  host: configService.get('DATABASE_HOST'),
  username: configService.get('DATABASE_USER'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  logging: configService.get('ORM_LOG'),
  synchronize: configService.get('ORM_SYNC'),
  entities: ['src/**/*.entity.ts'],
  migrations: ['./migrations/*.ts'],
});
