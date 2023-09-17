import {
  Put,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrdersService } from '../../services/orders/orders.service';

import { CreateOrderDto, UpdateOrderDto } from 'src/users/dtos/order.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}
  /**
    Returns all information about orders
  */
  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  /**
    Returns information about a specific order
  */
  @Get(':identifier')
  findOne(@Param('identifier', ParseIntPipe) identifier: number) {
    return this.orderService.findOne(identifier);
  }

  /**
    Create an order
  */
  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.orderService.create(payload);
  }

  /**
    Modify information about an order (Owners)
  */
  @Put(':identifier')
  update(
    @Param('identifier', ParseIntPipe) identifier: number,
    @Body() payload: UpdateOrderDto,
  ) {
    return this.orderService.update(identifier, payload);
  }

  /**
    Deletes an order
  */
  @Delete(':identifier')
  remove(@Param('identifier', ParseIntPipe) identifier: number) {
    return this.orderService.remove(identifier);
  }
}
