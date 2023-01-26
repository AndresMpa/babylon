import { Injectable, NotFoundException } from '@nestjs/common';

import { Category } from 'src/stock/entities/category.entity';

import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../dtos/categories.dtos';

@Injectable()
export class CategoriesService {
  private counterIdentifier = 1;
  private categories: Category[] = [
    {
      identifier: 1,
      name: 'Variado',
      description: 'Donde ponemos lo que tiene descuentos',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(index: number) {
    const category = this.categories.find((item) => item.identifier === index);
    if (!category) {
      throw new NotFoundException(
        `There's no a category assigned to ${index} identifier`,
      );
    } else {
      return category;
    }
  }

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
}
