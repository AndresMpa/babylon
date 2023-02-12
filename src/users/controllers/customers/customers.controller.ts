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
    Returns all customers information
  */
  @Get()
  findAll() {
    return this.customerServive.findAll();
  }

  /**
    Returns specific information from a customer using its identifier
  */
  @Get(':customerId')
  getDetails(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customerServive.findOne(customerId);
  }

  /**
    Creates a customer using a payload
  */
  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customerServive.create(payload);
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
    return this.customerServive.update(customerId, payload);
  }

  /**
    Deletes a customer using its identifier
  */
  @Delete(':customerId')
  remove(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customerServive.remove(customerId);
  }
}
