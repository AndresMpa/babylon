import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Client } from 'pg';

import { Customer } from 'src/users/entities/customer.entity';
import { Order } from 'src/users/entities/order.entity';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dto';

import { ProductsService } from 'src/stock/services/products/products.service';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('POSTGRES') private postgresInstance: Client,
    private productsService: ProductsService,
  ) {}

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
    const customer = this.customers.find((item) => item.identifier === index);
    if (!customer) {
      throw new NotFoundException(
        `There's no a customer assigned to ${index} identifier`,
      );
    } else {
      return customer;
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
    const customer = this.findOne(identifier);

    if (customer) {
      const index = this.customers.findIndex(
        (item) => item.identifier === identifier,
      );
      this.customers[index] = {
        ...customer,
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
        `There's no a customer assigned to ${index} identifier`,
      );
    }
    this.customers.splice(index, 1);
    return true;
  }

  getOrder(identifier: number): Order {
    const customer = this.findOne(identifier);
    return {
      date: new Date(),
      owner: customer,
      products: this.productsService.findAll(),
    };
  }

  getTask() {
    return new Promise((resolve, reject) => {
      this.postgresInstance.query('SELECT * FROM tasks', (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.rows);
        }
      });
    });
  }
}
