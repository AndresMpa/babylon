import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../../entities/product.entity';

import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  async findOne(identifier: number) {
    const product = await this.productRepository.findOneBy({ identifier });
    if (!product) {
      throw new NotFoundException(
        `There's no a product assigned to ${identifier} identifier`,
      );
    } else {
      return product;
    }
  }

  create(payload: CreateProductDto) {
    const newProduct = this.productRepository.create(payload);
    return this.productRepository.save(newProduct);
  }

  async update(identifier: number, payload: UpdateProductDto) {
    const product = await this.productRepository.findOneBy({ identifier });
    this.productRepository.merge(product, payload);
    return this.productRepository.save(product);
  }

  remove(identifier: number) {
    return this.productRepository.delete(identifier);
  }
}
