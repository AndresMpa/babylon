import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Modules
import { StockModule } from 'src/stock/stock.module';

// Controllers
import { OrdersController } from './controllers/orders/orders.controller';
import { AccountsController } from './controllers/accounts/accounts.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { OrderItemsController } from './controllers/order-items/order-items.controller';

// Services
import { OrdersService } from './services/orders/orders.service';
import { AccountsService } from './services/accounts/accounts.service';
import { CustomersService } from './services/customers/customers.service';
import { OrderItemsService } from './services/order-items/order-items.service';

// Entities
import { OrderItem } from './entities/orderItem.entity';
import { Customer } from './entities/customer.entity';
import { Account } from './entities/account.entity';
import { Order } from './entities/order.entity';
import { ProfileController } from './controllers/profile/profile.controller';

@Module({
  controllers: [
    OrderItemsController,
    CustomersController,
    AccountsController,
    OrdersController,
    ProfileController,
  ],
  providers: [
    OrderItemsService,
    CustomersService,
    AccountsService,
    OrdersService,
  ],
  imports: [
    TypeOrmModule.forFeature([Customer, Account, Order, OrderItem]),
    StockModule,
  ],
  exports: [AccountsService],
})
export class UsersModule {}
