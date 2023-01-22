import { Controller, Get, Param } from '@nestjs/common';

@Controller('catergories')
export class CatergoriesController {
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `Category id: ${categoryId} product id: ${productId}`;
  }
}
