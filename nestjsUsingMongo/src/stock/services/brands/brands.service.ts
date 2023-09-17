import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Brand } from 'src/stock/entities/brand.entity';

import {
  CreateBrandDto,
  UpdateBrandDto,
  FilterBrandDto,
} from 'src/stock/dtos/brands.dto';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async findAll(params?: FilterBrandDto) {
    if (params) {
      const { limit, offset } = params;

      return await this.brandModel
        .find()
        .limit(limit)
        .skip(offset * limit)
        .exec();
    } else {
      return await this.brandModel.find().exec();
    }
  }

  async findOne(identifier: string) {
    const brand = await this.brandModel.findOne({ _id: identifier }).exec();
    if (!brand) {
      throw new NotFoundException(
        `There's no a brand assigned to ${identifier} identifier`,
      );
    } else {
      return brand;
    }
  }

  create(payload: CreateBrandDto) {
    const newBrand = new this.brandModel(payload);
    return newBrand.save();
  }

  async update(identifier: string, payload: UpdateBrandDto) {
    const brand = await this.brandModel
      .findOneAndUpdate(
        { _id: identifier },
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
      _id: identifier,
    });
    if (!brand) {
      throw new NotFoundException(`Brand ${identifier} not found`);
    }
    return brand;
  }
}
