import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Query,
  Param,
  HttpCode,
  HttpStatus,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductsService } from '../../services/products/products.service';

import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';

import { MongoIdPipe } from '../../../common/mongo-id/mongo-id.pipe.ts';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  /**
    Return all products in a range (default: {limit: 100, offset: 0})
    using a brand filter (default: none)
  */
  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.productsService.findAll();
  }

  /*
    Returns matching product with sent identifier
  */
  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getDetails(@Param('productId', MongoIdPipe) productId: string) {
    return this.productsService.findOne(productId);
  }

  /**
    Creates a product using a payload
  */
  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  /**
    Partially updates a product using a payload and its identifier
  */
  @Put(':productId')
  update(
    @Param('productId', MongoIdPipe) productId: string,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(productId, payload);
  }

  /**
    Removes a product using its identifier
  */
  @Delete(':productId')
  delete(@Param('productId', MongoIdPipe) productId: string) {
    return this.productsService.remove(productId);
  }
}
