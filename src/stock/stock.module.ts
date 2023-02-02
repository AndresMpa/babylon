import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { BrandsController } from './controllers/brands/brands.controller';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';

// Services
import { BrandsService } from './services/brands/brands.service';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';

// Entities
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [BrandsController, ProductsController, CategoriesController],
  providers: [BrandsService, ProductsService, CategoriesService],
  exports: [ProductsService],
})
export class StockModule {}
