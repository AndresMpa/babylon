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

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Limit: ${limit}, Offset: ${offset}, Brand: ${brand}`,
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getDetails(@Param('productId') productId: string) {
    return `Product id: ${productId}`;
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
    @Param('productId') productId: string,
  ) {
    response.status(200).send({
      message: `Express like response ${productId}`,
    });
  }

  @Post()
  create(@Body() payload: any): any {
    return {
      message: `Data created`,
      payload,
    };
  }

  @Put(':productId')
  update(@Param('productId') productId: string, @Body() payload: any) {
    return {
      productId,
      payload,
    };
  }

  @Delete(':productId')
  delete(@Param('productId') productId: string) {
    return {
      message: `Product ${productId} deleted`,
      productId,
    };
  }
}
