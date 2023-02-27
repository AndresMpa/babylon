import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Brand } from 'src/stock/entities/brand.entity';

import { CreateBrandsDto, UpdateBrandsDto } from 'src/stock/dtos/brands.dto';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async findAll() {
    return await this.brandModel.find().exec();
  }

  async findOne(identifier: string) {
    const brand = await this.brandModel.findOne({ id: identifier }).exec();
    if (!brand) {
      throw new NotFoundException(
        `There's no a brand assigned to ${identifier} identifier`,
      );
    } else {
      return brand;
    }
  }

  /**
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
  */
}
