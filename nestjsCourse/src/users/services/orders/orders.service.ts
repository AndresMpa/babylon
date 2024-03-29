import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from 'src/users/entities/order.entity';
import { Account } from 'src/users/entities/account.entity';
import { Customer } from 'src/users/entities/customer.entity';

import { CreateOrderDto, UpdateOrderDto } from 'src/users/dtos/order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(identifier: number) {
    const order = await this.orderRepository.findOne({
      where: { identifier },
      relations: ['items', 'items.product'],
    });
    if (!order) {
      throw new NotFoundException(
        `There's no a customer assigned to ${identifier} identifier`,
      );
    } else {
      return order;
    }
  }

  async ordersByCustomer(userId: number) {
    const user = await this.user.findOne({
      where: { id: userId },
      relations: ['customer'],
    });
    const customerId = user.customer.id;
    return await this.orderRepository.find({
      where: { customer: { id: customerId } },
    });
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
