import { Module } from '@nestjs/common';

// Controllers
import { AdminsController } from './controllers/admins/admins.controller';
import { CustomersController } from './controllers/customers/customers.controller';

// Services
import { AdminsService } from './services/admins/admins.service';
import { CustomersService } from './services/customers/customers.service';

// Modules
import { StockModule } from 'src/stock/stock.module';

@Module({
  controllers: [CustomersController, AdminsController],
  providers: [CustomersService, AdminsService],
  imports: [StockModule],
})
export class UsersModule {}
