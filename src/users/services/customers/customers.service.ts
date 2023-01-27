import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from 'src/users/entities/customer.entity';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterIdentifier = 1;
  private customers: Customer[] = [
    {
      identifier: 1,
      name: 'Test',
      lastName: 'Man',
      phone: '3123456789',
    },
  ];

  findOne(index: number) {
    const order = this.customers.find((item) => item.identifier === index);
    if (!order) {
      throw new NotFoundException(
        `There's no a order assigned to ${index} identifier`,
      );
    } else {
      return order;
    }
  }

  create(payload: CreateCustomerDto) {
    this.counterIdentifier += 1;
    const newProduct = {
      identifier: this.counterIdentifier,
      ...payload,
    };

    this.customers.push(newProduct);

    return newProduct;
  }

  update(identifier: number, payload: UpdateCustomerDto) {
    const order = this.findOne(identifier);

    if (order) {
      const index = this.customers.findIndex(
        (item) => item.identifier === identifier,
      );
      this.customers[index] = {
        ...order,
        ...payload,
      };
      return this.customers[index];
    }
  }

  remove(identifier: number) {
    const index = this.customers.findIndex(
      (item) => item.identifier === identifier,
    );
    if (index === -1) {
      throw new NotFoundException(
        `There's no a order assigned to ${index} identifier`,
      );
    }
    this.customers.splice(index, 1);
    return true;
  }
}
