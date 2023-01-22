import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Limit: ${limit}, Offset: ${offset}, Brand: ${brand}`,
    };
  }

  @Get('/:productId')
  getDetails(@Param('productId') productId: string) {
    return `Product id: ${productId}`;
  }

  @Post()
  create(@Body() payload: any): any {
    return {
      message: `Data created`,
      payload,
    };
  }

  @Put(':productId')
  update(@Param('productId') productId: string, @Body() payload: any) {
    return {
      productId,
      payload,
    };
  }

  @Delete(':productId')
  delete(@Param('productId') productId: string) {
    return {
      message: `Product ${productId} deleted`,
      productId,
    };
  }
}
