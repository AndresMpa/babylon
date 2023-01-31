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
import { ApiTags } from '@nestjs/swagger';

import { BrandsService } from '../../services/brands/brands.service';

import { CreateBrandsDto, UpdateBrandsDto } from 'src/stock/dtos/brands.dto';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandService: BrandsService) {}

  /**
    Get all brands information
  */
  @Get()
  getAll(@Query('limit') limit = 1, @Query('offset') offset = 0) {
    return {
      message: `Brands limit: ${limit} offset ${offset}`,
      data: this.brandService.findAll(),
    };
  }

  /**
    Get a specific brand information using its identifier
  */
  @Get(':brandId')
  getDetails(@Param('brandId', ParseIntPipe) brandId: number) {
    return {
      message: `Brand id ${brandId}`,
      data: this.brandService.findOne(brandId),
    };
  }

  /**
    Creates a brand using a payload
  */
  @Post()
  create(@Body() payload: CreateBrandsDto) {
    return {
      message: 'Data created',
      data: this.brandService.create(payload),
    };
  }

  /**
    Updates a brand by parts using its identifier, also using a
    payload
  */
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

  /**
    Deletes a brand using its identifier
  */
  @Delete(':brandId')
  remove(@Param('brandId', ParseIntPipe) brandId: number) {
    return {
      message: `Brand ${brandId} deleted`,
      data: this.brandService.remove(brandId),
    };
  }
}
