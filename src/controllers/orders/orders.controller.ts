import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getCustomerOrders() {
    return '';
  }
  @Get(':orderId')
  getOrderDetails(@Param('orderId') orderId: string) {
    return `Order id: ${orderId}`;
  }
}
