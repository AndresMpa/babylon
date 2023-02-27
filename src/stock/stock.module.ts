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
  controllers: [BrandsController, ProductsController, CategoriesController],
  providers: [BrandsService, ProductsService, CategoriesService],
  exports: [ProductsService],
})
export class StockModule {}
