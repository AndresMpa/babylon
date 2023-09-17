import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

// Controllers
import { OrdersController } from './controllers/orders/orders.controller';
import { AccountsController } from './controllers/accounts/accounts.controller';
import { CustomersController } from './controllers/customers/customers.controller';

// Services
import { OrdersService } from './services/orders/orders.service';
import { AccountsService } from './services/accounts/accounts.service';
import { CustomersService } from './services/customers/customers.service';

// Schemes
import { Account, AccountSchema } from './entities/account.entity';
import { Customer, CustomerSchema } from './entities/customer.entity';

// Modules
import { StockModule } from 'src/stock/stock.module';
import { Order, OrderSchema } from './entities/order.entity';

@Module({
  imports: [
    StockModule,
    MongooseModule.forFeature([
      {
        name: Account.name,
        schema: AccountSchema,
      },
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
  ],
  controllers: [CustomersController, AccountsController, OrdersController],
  providers: [CustomersService, AccountsService, OrdersService],
})
export class UsersModule {}
