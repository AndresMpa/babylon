import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from 'src/users/entities/customer.entity';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async findAll() {
    return await this.customerRepository.find();
  }

  async findOne(identifier: number) {
    const customer = await this.customerRepository.findOneBy({ identifier });
    if (!customer) {
      throw new NotFoundException(
        `There's no a customer assigned to ${identifier} identifier`,
      );
    } else {
      return customer;
    }
  }

  async create(payload: CreateCustomerDto) {
    const newCustomer = await this.customerRepository.create(payload);
    return this.customerRepository.save(newCustomer);
  }

  async update(identifier: number, payload: UpdateCustomerDto) {
    const customer = await this.findOne(identifier);
    this.customerRepository.merge(customer, payload);
    return this.customerRepository.save(customer);
  }

  async remove(identifier: number) {
    return await this.customerRepository.delete(identifier);
  }
}
