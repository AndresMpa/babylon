import { Module } from '@nestjs/common';

import { StockModule } from './stock/stock.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [StockModule, UsersModule],
})
export class AppModule {}
