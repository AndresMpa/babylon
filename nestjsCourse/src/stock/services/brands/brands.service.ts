import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Brand } from 'src/stock/entities/brand.entity';

import { CreateBrandsDto, UpdateBrandsDto } from 'src/stock/dtos/brands.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  /**
    Get all brands information
  */
  async findAll() {
    return await this.brandRepository.find();
  }

  /**
    Get a specific brand, relations included
  */
  async findOne(identifier: number) {
    const brand = await this.brandRepository.findOne({
      where: {
        identifier: identifier,
      },
      relations: ['products'],
    });
    if (!brand) {
      throw new NotFoundException(
        `There's no a brand assigned to ${identifier} identifier`,
      );
    } else {
      return brand;
    }
  }

  /**
    Get a specific brand without relations
  */
  async findOneOnRaw(identifier: number) {
    const brand = await this.brandRepository.findOne({
      where: {
        identifier: identifier,
      },
    });
    if (!brand) {
      throw new NotFoundException(
        `There's no a brand assigned to ${identifier} identifier`,
      );
    } else {
      return brand;
    }
  }

  async create(payload: CreateBrandsDto) {
    const newBrand = await this.brandRepository.create(payload);
    return this.brandRepository.save(newBrand);
  }

  async update(identifier: number, payload: UpdateBrandsDto) {
    const brand = await this.brandRepository.findOneBy({ identifier });
    this.brandRepository.merge(brand, payload);
    return this.brandRepository.save(brand);
  }

  async remove(identifier: number) {
    return await this.brandRepository.delete(identifier);
  }
}
