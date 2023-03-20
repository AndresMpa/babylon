import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as joi from 'joi';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { StockModule } from './stock/stock.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

import { environments } from './environments';

import config from './config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    AuthModule,
    StockModule,
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: joi.object({
        DATABASE_URI: joi.string().optional(),
        DATABASE_HOST: joi.string().required(),
        DATABASE_NAME: joi.string().required(),
        DATABASE_PORT: joi.number().required(),
        DATABASE_USER: joi.string().required(),
        DATABASE_PASSWORD: joi.string().required(),
      }),
    }),
  ],
})
export class AppModule {}
