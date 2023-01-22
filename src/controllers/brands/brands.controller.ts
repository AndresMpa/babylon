import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(@Query('limit') limit = 1, @Query('offset') offset = 0) {
    return `Brands limit: ${limit} offset ${offset}`;
  }

  @Get(':brandId')
  getBrand(@Param('brandId') brandId: string) {
    return `Brand id ${brandId}`;
  }
}
