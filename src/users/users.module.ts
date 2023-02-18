import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Modules
import { StockModule } from 'src/stock/stock.module';

// Controllers
import { OrdersController } from './controllers/orders/orders.controller';
import { AccountsController } from './controllers/accounts/accounts.controller';
import { CustomersController } from './controllers/customers/customers.controller';

// Services
import { OrdersService } from './services/orders/orders.service';
import { AccountsService } from './services/accounts/accounts.service';
import { CustomersService } from './services/customers/customers.service';

// Entities
import { OrderItem } from './entities/orderItem.entity';
import { Customer } from './entities/customer.entity';
import { Account } from './entities/account.entity';
import { Order } from './entities/order.entity';

@Module({
  controllers: [CustomersController, AccountsController, OrdersController],
  providers: [CustomersService, AccountsService, OrdersService],
  imports: [
    TypeOrmModule.forFeature([Customer, Account, Order, OrderItem]),
    StockModule,
  ],
})
export class UsersModule {}
