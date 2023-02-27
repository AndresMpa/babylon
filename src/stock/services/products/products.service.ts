import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from '../../entities/product.entity';

import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll() {
    return await this.productModel.find().exec();
  }

  async findOne(identifier: string) {
    const product = await this.productModel.findOne({ id: identifier }).exec();
    if (!product) {
      throw new NotFoundException(`Product ${identifier} not found`);
    }
    return product;
  }

  /**
  create(payload: CreateProductDto) {
    this.counterIdentifier += 1;
    const newProduct = {
      identifier: this.counterIdentifier,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(identifier: number, payload: UpdateProductDto) {
    const product = this.findOne(identifier);

    if (product) {
      const index = this.products.findIndex(
        (item) => item.identifier === identifier,
      );
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
  }

  remove(identifier: number) {
    const index = this.products.findIndex(
      (item) => item.identifier === identifier,
    );
    if (index === -1) {
      throw new NotFoundException(
        `There's no a product assigned to ${index} identifier`,
      );
    }
    this.products.splice(index, 1);
    return true;
  }
  */
}
