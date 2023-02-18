import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Modules
import { StockModule } from 'src/stock/stock.module';

// Controllers
import { AccountController } from './controllers/account/account.controller';
import { CustomersController } from './controllers/customers/customers.controller';

// Services
import { AccountService } from './services/account/account.service';
import { CustomersService } from './services/customers/customers.service';

// Entities
import { Customer } from './entities/customer.entity';
import { Account } from './entities/account.entity';
import { Order } from './entities/order.entity.ts';

@Module({
  controllers: [CustomersController, AccountController],
  providers: [CustomersService, AccountService],
  imports: [
    TypeOrmModule.forFeature([Customer, Account, Order, OrderItem]),
    StockModule,
  ],
})
export class UsersModule {}
