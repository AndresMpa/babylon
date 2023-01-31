import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from 'src/stock/entities/brand.entity';

import { CreateBrandsDto, UpdateBrandsDto } from 'src/stock/dtos/brands.dto';

@Injectable()
export class BrandsService {
  private counterIdentifier = 1;
  private brands: Brand[] = [
    {
      identifier: 1,
      name: 'Example brand',
      image: 'https://some-data.com',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(index: number) {
    const brand = this.brands.find((item) => item.identifier === index);
    if (!brand) {
      throw new NotFoundException(
        `There's no a brand assigned to ${index} identifier`,
      );
    } else {
      return brand;
    }
  }

  create(payload: CreateBrandsDto) {
    this.counterIdentifier += 1;
    const newCategory = {
      identifier: this.counterIdentifier,
      ...payload,
    };

    this.brands.push(newCategory);

    return newCategory;
  }

  update(identifier: number, payload: UpdateBrandsDto) {
    const brand = this.findOne(identifier);

    if (brand) {
      const index = this.brands.findIndex(
        (item) => item.identifier === identifier,
      );
      this.brands[index] = {
        ...brand,
        ...payload,
      };
      return this.brands[index];
    }
  }

  remove(identifier: number) {
    const index = this.brands.findIndex(
      (item) => item.identifier === identifier,
    );
    if (index === -1) {
      throw new NotFoundException(
        `There's no brands assigned to ${index} identifier`,
      );
    }
    this.brands.splice(index, 1);
    return true;
  }
}
