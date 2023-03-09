import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

// Controllers
import { AccountsController } from './controllers/accounts/accounts.controller';
import { CustomersController } from './controllers/customers/customers.controller';

// Services
import { AccountsService } from './services/accounts/accounts.service';
import { CustomersService } from './services/customers/customers.service';

// Schemes
import { Account, AccountSchema } from './entities/account.entity';
import { Customer, CustomerSchema } from './entities/customer.entity';

// Modules
import { StockModule } from 'src/stock/stock.module';

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
    ]),
  ],
  controllers: [CustomersController, AccountsController],
  providers: [CustomersService, AccountsService],
})
export class UsersModule {}
