import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Customer } from 'src/users/entities/customer.entity';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async findAll() {
    return await this.customerModel.find().exec();
  }

  async findOne(identifier: string) {
    const customer = await this.customerModel
      .findOne({ _id: identifier })
      .exec();
    if (!customer) {
      throw new NotFoundException(
        `There's no a customer assigned to ${identifier} identifier`,
      );
    } else {
      return customer;
    }
  }

  create(payload: CreateCustomerDto) {
    console.log(payload);

    const newCustomer = new this.customerModel(payload);
    return newCustomer.save();
  }

  async update(identifier: string, payload: UpdateCustomerDto) {
    const customer = await this.customerModel
      .findOneAndUpdate(
        { _id: identifier },
        {
          $set: payload,
        },
        { new: true },
      )
      .exec();
    if (!customer) {
      throw new NotFoundException(`Customer ${identifier} not found`);
    }
    return customer;
  }

  async remove(identifier: string) {
    const customer = await this.customerModel.findOneAndDelete({
      _id: identifier,
    });
    if (!customer) {
      throw new NotFoundException(`Customer ${identifier} not found`);
    }
    return customer;
  }
}
