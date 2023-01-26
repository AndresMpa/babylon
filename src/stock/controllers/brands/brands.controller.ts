import {
  Put,
  Get,
  Post,
  Body,
  Param,
  Query,
  Controller,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';

import { BrandsService } from '../../services/brands/brands.service';

import { CreateBrandsDto, UpdateBrandsDto } from 'src/stock/dtos/brands.dtos';

@Controller('brands')
export class BrandsController {
  constructor(private brandService: BrandsService) {}

  @Get()
  getAll(@Query('limit') limit = 1, @Query('offset') offset = 0) {
    return {
      message: `Brands limit: ${limit} offset ${offset}`,
      data: this.brandService.findAll(),
    };
  }

  @Get(':brandId')
  getDetails(@Param('brandId', ParseIntPipe) brandId: number) {
    return {
      message: `Brand id ${brandId}`,
      data: this.brandService.findOne(brandId),
    };
  }

  @Post()
  create(@Body() payload: CreateBrandsDto) {
    return {
      message: 'Data created',
      data: this.brandService.create(payload),
    };
  }

  @Put(':brandId')
  update(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() payload: UpdateBrandsDto,
  ) {
    return {
      message: `Brand ${brandId} created`,
      data: this.brandService.update(brandId, payload),
    };
  }

  @Delete(':brandId')
  remove(@Param('brandId', ParseIntPipe) brandId: number) {
    return {
      message: `Brand ${brandId} deleted`,
      data: this.brandService.remove(brandId),
    };
  }
}
