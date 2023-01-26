import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `limit: ${limit} / offset: ${offset}`,
    };
  }

  @Get(':categoryId/products/:productId')
  getProductDetails(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return {
      message: `Category id: ${categoryId} product id: ${productId}`,
    };
  }
}
