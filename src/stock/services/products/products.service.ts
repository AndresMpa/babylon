import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Product } from '../../entities/product.entity';
import { Category } from 'src/stock/entities/category.entity';

import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';

import { BrandsService } from '../brands/brands.service';

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
      const brand = await this.brandService.findOneOnRaw(
        payload.brandIdentifier,
      );
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

  async addCategoryByProdut(
    productIdentifier: number,
    categoryIdentifier: number,
  ) {
    const product = await this.findOne(productIdentifier);
    const category = await this.categoryRepository.findOne({
      where: {
        identifier: categoryIdentifier,
      },
    });
    product.categories.push(category);
    return this.productRepository.save(product);
  }

  async update(identifier: number, payload: UpdateProductDto) {
    const product = await this.productRepository.findOneBy({ identifier });
    if (payload.brandIdentifier) {
      const brand = await this.brandService.findOneOnRaw(
        payload.brandIdentifier,
      );
      product.brand = brand;
    }

    if (payload.categories) {
      const categories = await this.categoryRepository.findBy({
        identifier: In(payload.categories),
      });
      product.categories = categories;
    }
    this.productRepository.merge(product, payload);
    return this.productRepository.save(product);
  }

  remove(identifier: number) {
    return this.productRepository.delete(identifier);
  }

  async removeCategoryByProdut(
    productIdentifier: number,
    categoryIdentifier: number,
  ) {
    const product = await this.findOne(productIdentifier);
    product.categories = product.categories.filter(
      (item: Category) => item.identifier !== categoryIdentifier,
    );
    return this.productRepository.save(product);
  }
}
