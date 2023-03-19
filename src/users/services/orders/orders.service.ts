import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Order } from 'src/users/entities/order.entity';

import { CreateOrderDto, UpdateOrderDto } from 'src/users/dtos/orders.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async findAll() {
    return await this.orderModel
      .find()
      .populate(['customers', 'products'])
      .exec();
  }

  async findOne(id: string) {
    return await this.orderModel.findById(id);
  }

  async create(payload: CreateOrderDto) {
    const newOrder = new this.orderModel(payload);
    return await newOrder.save();
  }

  async update(identifier: string, payload: UpdateOrderDto) {
    return await this.orderModel
      .findByIdAndUpdate(identifier, { $set: payload }, { new: true })
      .exec();
  }

  async remove(identifier: string) {
    return await this.orderModel.findByIdAndDelete(identifier);
  }
}
