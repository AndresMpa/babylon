import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':customerId')
  getDetails(@Param('customerId') customerId: string) {
    return {
      message: `Customer id ${customerId}`,
    };
  }
}
