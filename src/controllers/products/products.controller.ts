import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';

import { Response } from 'express';

import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Using limit(${limit}), offset(${offset}) and brand(${brand}) as filters`,
      data: this.productsService.findAll(),
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getDetails(@Param('productId', ParseIntPipe) productId: number) {
    return {
      message: `Product id: ${productId}`,
      data: this.productsService.findOne(productId),
    };
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

  @Post()
  create(@Body() payload: any): any {
    return {
      message: 'Data created',
      data: this.productsService.create(payload),
    };
  }

  @Put(':productId')
  update(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() payload: any,
  ) {
    return {
      message: `Product ${productId} created sucessfully`,
      data: this.productsService.update(productId, payload),
    };
  }

  @Delete(':productId')
  delete(@Param('productId', ParseIntPipe) productId: number) {
    return {
      message: `Product ${productId} deleted`,
      productId,
    };
  }
}
