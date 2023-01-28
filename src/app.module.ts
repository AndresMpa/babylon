import { Module } from '@nestjs/common';

import { StockModule } from './stock/stock.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [StockModule, UsersModule, DatabaseModule],
})
export class AppModule {}
