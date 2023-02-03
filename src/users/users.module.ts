import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Modules
import { StockModule } from 'src/stock/stock.module';

// Controllers
import { AdminsController } from './controllers/admins/admins.controller';
import { CustomersController } from './controllers/customers/customers.controller';

// Services
import { AdminsService } from './services/admins/admins.service';
import { CustomersService } from './services/customers/customers.service';

// Entities
import { Customer } from './entities/customer.entity';
import { Admin } from './entities/admin.entity';

@Module({
  controllers: [CustomersController, AdminsController],
  providers: [CustomersService, AdminsService],
  imports: [TypeOrmModule.forFeature([Customer, Admin]), StockModule],
})
export class UsersModule {}
