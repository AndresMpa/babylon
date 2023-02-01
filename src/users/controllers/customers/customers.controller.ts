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

import { CustomersService } from 'src/users/services/customers/customers.service';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dto';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private customerServive: CustomersService) {}

  /**
    Returns all tasks from an user
  */
  @Get('task')
  getTasks() {
    return this.customerServive.getTask();
  }

  /**
    Returns specific information form a customer using its identifier
  */
  @Get(':customerId')
  getDetails(@Param('customerId', ParseIntPipe) customerId: number) {
    return {
      message: `Customer id ${customerId}`,
      data: this.customerServive.findOne(customerId),
    };
  }

  /**
    Returns customer's orders using its identifier
  */
  @Get(':customerId/orders')
  getOrder(@Param('customerId', ParseIntPipe) customerId: number) {
    return {
      message: `Customer ${customerId} orders`,
      data: this.customerServive.getOrder(customerId),
    };
  }

  /**
    Creates a customer using a payload
  */
  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return {
      message: `Customer created`,
      data: this.customerServive.create(payload),
    };
  }

  /**
    Partially updates a customer information using its identifier
    and a payload
  */
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

  /**
    Deletes a customer using its identifier
  */
  @Delete(':customerId')
  remove(@Param('customerId', ParseIntPipe) customerId: number) {
    return {
      message: `Customer ${customerId} has been removed from DB`,
      data: this.customerServive.remove(customerId),
    };
  }
}
