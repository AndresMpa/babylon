import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Controllers
import { BrandsController } from './controllers/brands/brands.controller';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';

// Services
import { BrandsService } from './services/brands/brands.service';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';

<<<<<<<< HEAD:nestjsUsingMongo/src/stock/stock.module.ts
// Schemes
import { Brand, BrandSchema } from './entities/brand.entity';
import { Product, ProductSchema } from './entities/product.entity';
import { Category, CategorySchema } from './entities/category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Brand.name,
        schema: BrandSchema,
      },
      {
        name: Product.name,
        schema: ProductSchema,
      },
      {
        name: Category.name,
        schema: CategorySchema,
      },
    ]),
  ],
========
// Entities
import { Brand } from './entities/brand.entity';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, Brand])],
>>>>>>>> main:nestjsCourse/src/stock/stock.module.ts
  controllers: [BrandsController, ProductsController, CategoriesController],
  providers: [BrandsService, ProductsService, CategoriesService],
  exports: [ProductsService, TypeOrmModule],
})
export class StockModule {}
