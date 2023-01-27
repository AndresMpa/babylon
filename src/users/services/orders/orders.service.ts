import { Injectable, NotFoundException } from '@nestjs/common';

import { Order } from 'src/users/entities/order.entity';

import { CreateOrderDto, UpdateOrderDto } from 'src/users/dtos/orders.dtos';

@Injectable()
export class OrdersService {
  private counterIdentifier = 1;
  private orders: Order[] = [
    {
      identifier: 1,
      owner: 1,
      phone: '3123456789',
    },
  ];

  findAll() {
    return this.orders;
  }

  findOne(index: number) {
    const order = this.orders.find((item) => item.identifier === index);
    if (!order) {
      throw new NotFoundException(
        `There's no a order assigned to ${index} identifier`,
      );
    } else {
      return order;
    }
  }

  create(payload: CreateOrderDto) {
    this.counterIdentifier += 1;
    const newOrder = {
      identifier: this.counterIdentifier,
      ...payload,
    };

    this.orders.push(newOrder);

    return newOrder;
  }

  update(identifier: number, payload: UpdateOrderDto) {
    const order = this.findOne(identifier);

    if (order) {
      const index = this.orders.findIndex(
        (item) => item.identifier === identifier,
      );
      this.orders[index] = {
        ...order,
        ...payload,
      };
      return this.orders[index];
    }
  }

  remove(identifier: number) {
    const index = this.orders.findIndex(
      (item) => item.identifier === identifier,
    );
    if (index === -1) {
      throw new NotFoundException(
        `There's no a order assigned to ${index} identifier`,
      );
    }
    this.orders.splice(index, 1);
    return true;
  }
}
