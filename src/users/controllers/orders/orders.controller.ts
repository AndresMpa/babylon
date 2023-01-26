import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from 'src/users/dtos/orders.dtos';

import { OrdersService } from 'src/users/services/orders/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderServive: OrdersService) {}

  @Get(':orderId')
  getDetails(@Param('orderId') orderId: string) {
    return {
      message: `Order id: ${orderId}`,
    };
  }

  @Get('customer/:customerId')
  getAll(@Param('customerId') customerId: string) {
    return {
      message: `Orders from ${customerId}`,
    };
  }

  @Post()
  create(@Body() payload: CreateOrderDto) {
    return {
      message: 'Order created',
      data: this.orderServive.create(payload),
    };
  }

  @Put(':orderId')
  update(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Body() payload: UpdateOrderDto,
  ) {
    return {
      message: `Order id: ${orderId} has been created`,
      data: this.orderServive.update(orderId, payload),
    };
  }

  @Delete(':orderId')
  remove(@Param('orderId', ParseIntPipe) orderId: number) {
    return {
      message: `Order id: ${orderId} has been removed`,
      data: this.orderServive.remove(orderId),
    };
  }
}
