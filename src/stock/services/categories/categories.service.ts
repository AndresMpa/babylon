import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category } from 'src/stock/entities/category.entity';

import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../dtos/categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async findAll() {
    return this.categoryModel.find().exec();
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

  /**
  create(payload: CreateCategoryDto) {
    this.counterIdentifier += 1;
    const newCategory = {
      identifier: this.counterIdentifier,
      ...payload,
    };

    this.categories.push(newCategory);

    return newCategory;
  }

  update(identifier: number, payload: UpdateCategoryDto) {
    const category = this.findOne(identifier);

    if (category) {
      const index = this.categories.findIndex(
        (item) => item.identifier === identifier,
      );
      this.categories[index] = {
        ...category,
        ...payload,
      };
      return this.categories[index];
    }
  }

  remove(identifier: number) {
    const index = this.categories.findIndex(
      (item) => item.identifier === identifier,
    );
    if (index === -1) {
      throw new NotFoundException(
        `There's no categories assigned to ${index} identifier`,
      );
    }
    this.categories.splice(index, 1);
    return true;
  }
  */
}
