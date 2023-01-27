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

import { CustomersService } from 'src/users/services/customers/customers.service';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private customerServive: CustomersService) {}
  @Get(':customerId')
  getDetails(@Param('customerId', ParseIntPipe) customerId: number) {
    return {
      message: `Customer id ${customerId}`,
      data: this.customerServive.findOne(customerId),
    };
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return {
      message: `Customer created`,
      data: this.customerServive.create(payload),
    };
  }

  @Put(':customerId')
  update(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return {
      message: `Customer ${customerId} updates`,
      data: this.customerServive.update(customerId, payload),
    };
  }

  @Delete(':customerId')
  remove(@Param('customerId', ParseIntPipe) customerId: number) {
    return {
      message: `Customer ${customerId} has been removed from DB`,
      data: this.customerServive.remove(customerId),
    };
  }
}
