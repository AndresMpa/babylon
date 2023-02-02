import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Query,
  Param,
  Res,
  HttpCode,
  HttpStatus,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Response } from 'express';

import { ProductsService } from '../../services/products/products.service';

import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  /**
    Return all products in a range (default: {limit: 100, offset: 0})
    using a brand filter (default: none)
  */
  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  /*
    Returns matching product with sent identifier
  */
  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getDetails(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  /*
    Some cases It can be useful to get native express objects
    in general it's better to use Nest itself, but in some cases
    to use express can be easier, instead of using this option a
    custom decorator could achieve this too
  */
  @Get('express/:productId')
  getOneExpressLike(
    @Res() response: Response,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    response.status(200).send({
      message: `Express like response ${productId}`,
    });
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
    @Param('productId', ParseIntPipe) productId: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(productId, payload);
  }

  /**
    Removes a product using its identifier
  */
  @Delete(':productId')
  delete(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.remove(productId);
  }
}
