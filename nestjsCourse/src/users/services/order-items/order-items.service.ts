import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from 'src/stock/entities/product.entity';
import { Order } from 'src/users/entities/order.entity';

import {
  CreateOrderItemDto,
  UpdateOrderItemDto,
} from 'src/users/dtos/orderItem.dto';
import { OrderItem } from 'src/users/entities/orderItem.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
  ) {}

  async findAll() {
    return await this.orderItemRepository.find();
  }

  async findOne(identifier: number) {
    return await this.orderItemRepository.findOne({
      where: { identifier },
    });
  }

  async create(payload: CreateOrderItemDto) {
    if (!(payload.productId && payload.orderId)) {
      throw new NotFoundException(
        'Missing parameters in payload for creation in OrderItemsService',
      );
    }

    const item = new OrderItem();
    item.quantity = payload.quantity;
    item.order = await this.orderRepository.findOneBy({
      identifier: payload.orderId,
    });
    item.product = await this.productRepository.findOneBy({
      identifier: payload.productId,
    });

    return this.orderItemRepository.save(item);
  }

  async update(identifier: number, payload: UpdateOrderItemDto) {
    const item = await this.findOne(identifier);

    if (payload.orderId) {
      item.order = await this.orderRepository.findOneBy({
        identifier: payload.orderId,
      });
    }

    if (payload.productId) {
      item.product = await this.productRepository.findOneBy({
        identifier: payload.productId,
      });
    }

    this.orderItemRepository.merge(item, payload);

    return this.orderItemRepository.save(item);
  }

  async remove(identifier: number) {
    return await this.orderItemRepository.delete(identifier);
  }
}
