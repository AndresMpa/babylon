import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Admin } from 'src/users/entities/admin.entity';

import { CreateAdminDto, UpdateAdminDto } from 'src/users/dtos/admins.dto';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async findOne(identifier: number) {
    const admin = await this.adminRepository.findOneBy({ identifier });
    if (!admin) {
      throw new NotFoundException(
        `There's no a administrator assigned to ${identifier} identifier`,
      );
    } else {
      return admin;
    }
  }

  async create(payload: CreateAdminDto) {
    const newAdmin = await this.adminRepository.create(payload);
    return this.adminRepository.save(newAdmin);
  }

  async update(identifier: number, payload: UpdateAdminDto) {
    const admin = await this.findOne(identifier);
    this.adminRepository.merge(admin, payload);
    return this.adminRepository.save(admin);
  }

  async remove(identifier: number) {
    return await this.adminRepository.delete(identifier);
  }
}
