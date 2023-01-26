import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
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
}
