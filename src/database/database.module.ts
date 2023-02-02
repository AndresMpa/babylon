import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, database, password, port } = configService.database;
        return {
          type: 'postgres',
          host,
          port,
          database,
          password,
          username: user,
          autoLoadEntities: true,
          synchronize: process.env.NODE_ENV !== 'prod',
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'POSTGRES',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, database, password, port } = configService.database;
        const client = new Client({
          user,
          host,
          database,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['POSTGRES', TypeOrmModule],
})
export class DatabaseModule {}
