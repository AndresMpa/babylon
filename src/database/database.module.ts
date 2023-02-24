import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { MongoClient } from 'mongodb';
import config from 'src/config';

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, port, databaseName } =
          configService.database;
        const uri = `${connection}://${user}:${password}@${host}:${port}/?authSource=admin&readPreference=primary`;
        const client = new MongoClient(uri);

        await client.connect();
        const databaseInstance = client.db(`${databaseName}`);
        return databaseInstance;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['MONGO'],
})
export class DatabaseModule {}
