import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Query,
  Param,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';

import { CategoriesService } from 'src/stock/services/categories/categories.service';

import { CreateCategoryDto } from 'src/stock/dtos/categories.dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}

  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `limit: ${limit} / offset: ${offset}`,
      data: this.categoryService.findAll(),
    };
  }

  @Get(':categoryId/products/:productId')
  getProductDetails(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return {
      message: `Category id: ${categoryId} product id: ${productId}`,
      data: this.categoryService.findOne(categoryId),
    };
  }

  @Post(':categoryId')
  create(@Body() payload: CreateCategoryDto) {
    return {
      message: 'Data created',
      data: this.categoryService.create(payload),
    };
  }

  @Put(':categoryId')
  update(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Body() payload: CreateCategoryDto,
  ) {
    return {
      message: 'Data created',
      data: this.categoryService.update(categoryId, payload),
    };
  }

  @Delete(':categoryId')
  remove(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return {
      message: `Category ${categoryId} has been removed`,
      data: this.categoryService.remove(categoryId),
    };
  }
}
