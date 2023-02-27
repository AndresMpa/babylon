import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category } from 'src/stock/entities/category.entity';

import {
  CreateCategoryDto,
  UpdateCategoryDto,
  FilterCategoryDto,
} from '../../dtos/categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async findAll(params?: FilterCategoryDto) {
    if (params) {
      const { limit, offset } = params;
      return await this.categoryModel
        .find()
        .limit(limit)
        .skip(offset * limit)
        .exec();
    } else {
      return await this.categoryModel.find().exec();
    }
  }

  async findOne(identifier: string) {
    const category = await this.categoryModel
      .findOne({ id: identifier })
      .exec();
    if (!category) {
      throw new NotFoundException(
        `There's no a category assigned to ${identifier} identifier`,
      );
    } else {
      return category;
    }
  }

  create(payload: CreateCategoryDto) {
    const newCategory = new this.categoryModel(payload);
    return newCategory.save();
  }

  async update(identifier: string, payload: UpdateCategoryDto) {
    const category = await this.categoryModel
      .findOneAndUpdate(
        { id: identifier },
        {
          $set: payload,
        },
        { new: true },
      )
      .exec();
    if (!category) {
      throw new NotFoundException(`Category ${identifier} not found`);
    }
    return category;
  }

  async remove(identifier: string) {
    const category = await this.categoryModel.findOneAndDelete({
      id: identifier,
    });
    if (!category) {
      throw new NotFoundException(`Category ${identifier} not found`);
    }
    return category;
  }
}
