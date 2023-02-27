import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';

import { Product } from '../../entities/product.entity';

import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductDto,
} from '../../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll(params?: FilterProductDto) {
    if (params) {
      const filters: FilterQuery<Product> = {};
      const { limit, offset } = params;
      const { minPrice, maxPrice } = params;
      if (minPrice && maxPrice) {
        filters.price = { $gte: minPrice, $lte: maxPrice };
      }
      return await this.productModel
        .find(filters)
        .limit(limit)
        .skip(offset * limit)
        .exec();
    } else {
      return await this.productModel.find().exec();
    }
  }

  async findOne(identifier: string) {
    const product = await this.productModel.findOne({ id: identifier }).exec();
    if (!product) {
      throw new NotFoundException(`Product ${identifier} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    const newProduct = new this.productModel(payload);
    return newProduct.save();
  }

  /**
    Using $set mongoose updates only fields that changed
    instead of updating the entire object
  */
  async update(identifier: string, payload: UpdateProductDto) {
    const product = await this.productModel
      .findOneAndUpdate(
        { id: identifier },
        {
          $set: payload,
        },
        { new: true },
      )
      .exec();
    if (!product) {
      throw new NotFoundException(`Product ${identifier} not found`);
    }
    return product;
  }

  async remove(identifier: string) {
    const product = await this.productModel.findOneAndDelete({
      id: identifier,
    });
    if (!product) {
      throw new NotFoundException(`Product ${identifier} not found`);
    }
    return product;
  }
}
