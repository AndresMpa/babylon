import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAll(@Query('limit') limit = 1, @Query('offset') offset = 0) {
    return {
      message: `Brands limit: ${limit} offset ${offset}`,
    };
  }

  @Get(':brandId')
  getDetails(@Param('brandId') brandId: string) {
    return {
      message: `Brand id ${brandId}`,
    };
  }
}
