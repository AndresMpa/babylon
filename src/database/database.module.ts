import { Global, Inject, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

import config from '../config';

@Global()
@Module({
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
  exports: ['POSTGRES'],
})
export class DatabaseModule {}
