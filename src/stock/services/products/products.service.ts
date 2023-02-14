import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Product } from '../../entities/product.entity';

import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';

import { BrandsService } from '../brands/brands.service';
import { Category } from 'src/stock/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private brandService: BrandsService,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  async findOne(identifier: number) {
    const product = await this.productRepository.findOne({
      where: { identifier },
      relations: ['brand', 'categories'],
    });
    if (!product) {
      throw new NotFoundException(
        `There's no a product assigned to ${identifier} identifier`,
      );
    } else {
      return product;
    }
  }

  async create(payload: CreateProductDto) {
    const newProduct = this.productRepository.create(payload);
    if (payload.brandIdentifier) {
      const brand = await this.brandService.findOneOnRaw(payload.brandIdentifier);
      newProduct.brand = brand;
    }
    if (payload.categories) {
      const categories = await this.categoryRepository.findBy({
        identifier: In(payload.categories),
      });
      newProduct.categories = categories;
    }
    return this.productRepository.save(newProduct);
  }

  async update(identifier: number, payload: UpdateProductDto) {
    const product = await this.productRepository.findOneBy({ identifier });
    if (payload.brandIdentifier) {
      const brand = await this.brandService.findOneOnRaw(payload.brandIdentifier);
      product.brand = brand;
    } else {
      throw new BadRequestException('Missing parameter "Brand"');
    }
    this.productRepository.merge(product, payload);
    return this.productRepository.save(product);
  }

  remove(identifier: number) {
    return this.productRepository.delete(identifier);
  }
}
