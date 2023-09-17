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

import { OrderItemsService } from '../../services/order-items/order-items.service';

import {
  CreateOrderItemDto,
  UpdateOrderItemDto,
} from 'src/users/dtos/orderItem.dto';

@ApiTags('Order-items')
@Controller('order-items')
export class OrderItemsController {
  constructor(private itemsService: OrderItemsService) {}
  /**
    Returns information form items
  */
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  /**
    Returns specific information about orders
  */
  @Get(':identifier')
  findOne(@Param('identifier', ParseIntPipe) identifier: number) {
    return this.itemsService.findOne(identifier);
  }

  /**
    Creates order detail, including products, and identifiers
  */
  @Post()
  create(@Body() payload: CreateOrderItemDto) {
    return this.itemsService.create(payload);
  }

  /**
    Modify information about an order
  */
  @Put(':identifier')
  update(
    @Param('identifier', ParseIntPipe) identifier: number,
    @Body() payload: UpdateOrderItemDto,
  ) {
    return this.itemsService.update(identifier, payload);
  }

  /**
    Deletes information from an order
  */
  @Delete(':identifier')
  remove(@Param('identifier', ParseIntPipe) identifier: number) {
    return this.itemsService.remove(identifier);
  }
}
