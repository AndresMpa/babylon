import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from 'src/stock/entities/category.entity';

import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../dtos/categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(identifier: number) {
    const category = await this.categoryRepository.findOneBy({ identifier });
    if (!category) {
      throw new NotFoundException(
        `There's no a category assigned to ${identifier} identifier`,
      );
    } else {
      return category;
    }
  }

  async create(payload: CreateCategoryDto) {
    const newCategory = await this.categoryRepository.create(payload);
    return this.categoryRepository.save(newCategory);
  }

  async update(identifier: number, payload: UpdateCategoryDto) {
    const category = await this.findOne(identifier);
    this.categoryRepository.merge(category, payload);
    return this.categoryRepository.save(category);
  }

  async remove(identifier: number) {
    return await this.categoryRepository.delete(identifier);
  }
}
