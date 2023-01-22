import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProductsController } from './controllers/products/products.controller';
import { CatergoriesController } from './controllers/catergories/catergories.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CustomersController } from './controllers/customers/customers.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CatergoriesController,
    OrdersController,
    UsersController,
    BrandsController,
    CustomersController,
  ],
  providers: [AppService],
})
export class AppModule {}
