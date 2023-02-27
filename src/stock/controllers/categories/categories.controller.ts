import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Query,
  Param,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoriesService } from 'src/stock/services/categories/categories.service';

import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'src/stock/dtos/categories.dto';

import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}

  /**
    Get all categories, in a range (default as: {limit: 100, offset: 0})
  */
  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.categoryService.findAll();
  }

  /**
    Get product existences from a particular category using identifiers
    from both entities
  */
  @Get(':categoryId')
  getProductDetails(@Param('categoryId', MongoIdPipe) categoryId: string) {
    return this.categoryService.findOne(categoryId);
  }

  /**
    Creates a category, using a payload
  */
  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.categoryService.create(payload);
  }

  /**
    Partially updates a category information, using a its identifier
    and a payload
  */
  @Put(':categoryId')
  update(
    @Param('categoryId', MongoIdPipe) categoryId: string,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoryService.update(categoryId, payload);
  }

  /**
    Deletes a category using its identifiers
  */
  @Delete(':categoryId')
  remove(@Param('categoryId', MongoIdPipe) categoryId: string) {
    return this.categoryService.remove(categoryId);
  }
}
