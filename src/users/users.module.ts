import { Module } from '@nestjs/common';

// Controllers
import { OrdersController } from './controllers/orders/orders.controller';
import { AdminsController } from './controllers/admins/admins.controller';
import { CustomersController } from './controllers/customers/customers.controller';

// Services
import { OrdersService } from './services/orders/orders.service';
import { AdminsService } from './services/admins/admins.service';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [OrdersController, CustomersController, AdminsController],
  providers: [OrdersService, CustomersService, AdminsService],
})
export class UsersModule {}
