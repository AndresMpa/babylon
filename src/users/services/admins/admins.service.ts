import { Injectable, NotFoundException } from '@nestjs/common';

import { Admin } from 'src/users/entities/admin.entity';

import { CreateAdminDto, UpdateAdminDto } from 'src/users/dtos/admins.dtos';

@Injectable()
export class AdminsService {
  private counterIdentifier = 1;
  private admins: Admin[] = [
    {
      identifier: 1,
      password: '123456',
      email: 'test@shop.com',
      role: 'salesman',
    },
  ];

  findOne(index: number) {
    const admin = this.admins.find((item) => item.identifier === index);
    if (!admin) {
      throw new NotFoundException(
        `There's no a admin assigned to ${index} identifier`,
      );
    } else {
      return admin;
    }
  }

  create(payload: CreateAdminDto) {
    this.counterIdentifier += 1;
    const admin = {
      identifier: this.counterIdentifier,
      ...payload,
    };

    this.admins.push(admin);

    return admin;
  }

  update(identifier: number, payload: UpdateAdminDto) {
    const admin = this.findOne(identifier);

    if (admin) {
      const index = this.admins.findIndex(
        (item) => item.identifier === identifier,
      );
      this.admins[index] = {
        ...admin,
        ...payload,
      };
      return this.admins[index];
    }
  }

  remove(identifier: number) {
    const index = this.admins.findIndex(
      (item) => item.identifier === identifier,
    );
    if (index === -1) {
      throw new NotFoundException(
        `There's no a admin assigned to ${index} identifier`,
      );
    }
    this.admins.splice(index, 1);
    return true;
  }
}
