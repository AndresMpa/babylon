import {
  Put,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BrandsService } from '../../services/brands/brands.service';

import {
  CreateBrandDto,
  UpdateBrandDto,
  FilterBrandDto,
} from 'src/stock/dtos/brands.dto';

import { MongoIdPipe } from '../../../common/mongo-id/mongo-id.pipe';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandService: BrandsService) {}

  /**
    Get all brands information
  */
  @Get()
  getAll(@Query() params: FilterBrandDto) {
    return this.brandService.findAll(params);
  }

  /**
    Get a specific brand information using its identifier
  */
  @Get(':brandId')
  getDetails(@Param('brandId', MongoIdPipe) brandId: string) {
    return this.brandService.findOne(brandId);
  }

  /**
    Creates a brand using a payload
  */
  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandService.create(payload);
  }

  /**
    Updates a brand by parts using its identifier, also using a
    payload
  */
  @Put(':brandId')
  update(
    @Param('brandId', MongoIdPipe) brandId: string,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandService.update(brandId, payload);
  }

  /**
    Deletes a brand using its identifier
  */
  @Delete(':brandId')
  remove(@Param('brandId', MongoIdPipe) brandId: string) {
    return this.brandService.remove(brandId);
  }
}
