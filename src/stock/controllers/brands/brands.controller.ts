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
    return this.brandService.findAll();
  }

  /**
    Get a specific brand information using its identifier
  */
  @Get(':brandId')
  getDetails(@Param('brandId') brandId: string) {
    return this.brandService.findOne(brandId);
  }

  /**
    Creates a brand using a payload
  */
  /**
  @Post()
  create(@Body() payload: CreateBrandsDto) {
    return this.brandService.create(payload);
  }
  */

  /**
    Updates a brand by parts using its identifier, also using a
    payload
  */
  /**
  @Put(':brandId')
  update(
    @Param('brandId') brandId: string,
    @Body() payload: UpdateBrandsDto,
  ) {
    return this.brandService.update(brandId, payload);
  }
  */

  /**
    Deletes a brand using its identifier
  */
  /**
  @Delete(':brandId')
  remove(@Param('brandId') brandId: string) {
    return this.brandService.remove(brandId);
  }
  */
}
