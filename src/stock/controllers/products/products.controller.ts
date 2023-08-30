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
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Response } from 'express';

import { ProductsService } from '../../services/products/products.service';

import {
  UpdateProductDto,
  CreateProductDto,
  FilterProductsDto,
} from '../../dtos/products.dto';

import { JwtAuthGuard } from '../../../auth/guards/jwt-auth/jwt-auth.guard';
import { Public } from '../../../auth/decorators/public/public.decorator';

@ApiTags('Products')
@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  /**
    Return all products in a range (default: {limit: 100, offset: 0})
    using a brand filter (default: none)
  */
  @Get()
  @Public()
  getAll(@Query() params: FilterProductsDto) {
    return this.productsService.findAll(params);
  }

  /*
    Returns matching product with sent identifier
  */
  @Public()
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
  @Public()
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
    Adds an specific category to a particular product
  */
  @Put(':productId/category/:categoryId')
  addCategory(
    @Param('productId', ParseIntPipe) productId: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productsService.addCategoryByProdut(productId, categoryId);
  }

  /**
    Removes a product using its identifier
  */
  @Delete(':productId')
  delete(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.remove(productId);
  }

  /**
    Removes an specific category from a particular product
  */
  @Delete(':productId/category/:categoryId')
  deleteCategory(
    @Param('productId', ParseIntPipe) productId: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productsService.removeCategoryByProdut(productId, categoryId);
  }
}
