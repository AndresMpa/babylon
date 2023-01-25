import { Module } from '@nestjs/common';

// Controllers
import { AppController } from './app.controller';
import { ProductsController } from './controllers/products/products.controller';
import { CatergoriesController } from './controllers/categories/categories.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CustomersController } from './controllers/customers/customers.controller';

// Services
import { AppService } from './app.service';
import { ProductsService } from './services/products/products.service';

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
  providers: [AppService, ProductsService],
})
export class AppModule {}
