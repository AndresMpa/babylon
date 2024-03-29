import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as joi from 'joi';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { StockModule } from './stock/stock.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

import { environments } from './environments';

import config from './config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    StockModule,
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: joi.object({
        API_KEY: joi.string().required(),
        DATABASE_NAME: joi.string().required(),
        DATABASE_PORT: joi.number().required(),
      }),
    }),
  ],
})
export class AppModule {}
