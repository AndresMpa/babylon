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

  create(payload: CreateBrandsDto) {
    const newBrand = new this.brandModel(payload);
    return newBrand.save();
  }

  async update(identifier: string, payload: UpdateBrandsDto) {
    const brand = await this.brandModel
      .findOneAndUpdate(
        { id: identifier },
        {
          $set: payload,
        },
        { new: true },
      )
      .exec();
    if (!brand) {
      throw new NotFoundException(`Brand ${identifier} not found`);
    }
    return brand;
  }

  async remove(identifier: string) {
    const brand = await this.brandModel.findOneAndDelete({
      id: identifier,
    });
    if (!brand) {
      throw new NotFoundException(`Brand ${identifier} not found`);
    }
    return brand;
  }
}
