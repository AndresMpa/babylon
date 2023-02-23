import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from 'src/users/entities/order.entity';
import { Customer } from 'src/users/entities/customer.entity';

import { CreateOrderDto, UpdateOrderDto } from 'src/users/dtos/order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(identifier: number) {
    const order = await this.orderRepository.findOneBy({ identifier });
    if (!order) {
      throw new NotFoundException(
        `There's no a customer assigned to ${identifier} identifier`,
      );
    } else {
      return order;
    }
  }

  async create(payload: CreateOrderDto) {
    const newOrder = new Order();
    if (payload.customerId) {
      const customer = await this.customerRepository.findOne({
        where: {
          identifier: payload.customerId,
        },
      });
      newOrder.customer = customer;
    }
    return this.orderRepository.save(newOrder);
  }

  async update(identifier: number, payload: UpdateOrderDto) {
    const order = await this.findOne(identifier);
    if (payload.customerId) {
      const customer = await this.customerRepository.findOne({
        where: {
          identifier: payload.customerId,
        },
      });
      order.customer = customer;
    }
    return this.orderRepository.save(order);
  }

  async remove(identifier: number) {
    return await this.orderRepository.delete(identifier);
  }
}
