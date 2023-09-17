import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrdersService } from '../../services/orders/orders.service';

import {
  CreateOrderDto,
  UpdateOrderDto,
  AddProductsToOrderDto,
} from 'src/users/dtos/orders.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  /**
    Returns all information form orders
  */
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  /**
    Returns specific information form an order using its identifier
  */
  @Get(':orderId')
  get(@Param('orderId') orderId: string) {
    return this.ordersService.findOne(orderId);
  }

  /**
    Creates an order using a payload
  */
  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  /**
    Updates an orders using its identifier to find it
  */
  @Put(':orderId')
  update(@Param('orderId') orderId: string, @Body() payload: UpdateOrderDto) {
    return this.ordersService.update(orderId, payload);
  }

  /**
    Updates an orders using its identifier to find it
  */
  @Put(':orderId/product')
  updateOrder(
    @Param('orderId') orderId: string,
    @Body() payload: AddProductsToOrderDto,
  ) {
    return this.ordersService.addProduct(orderId, payload.productsIdentifiers);
  }

  /**
    Deletes an order using its identifier
  */
  @Delete(':orderId')
  remove(@Param('orderId') orderId: string) {
    return this.ordersService.remove(orderId);
  }

  /**
    Deletes a product from an order using theirs identifier
  */
  @Delete(':orderId/product/:productId')
  deleteProduct(
    @Param('orderId') orderId: string,
    @Param('productId') productId: string,
  ) {
    return this.ordersService.removeProduct(orderId, productId);
  }
}
