import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Limit: ${limit}, Offset: ${offset}, Brand: ${brand}`;
  }
  @Get('/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Product id: ${productId}`;
  }
}
