import {
  Put,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dto';
import { CustomersService } from 'src/users/services/customers/customers.service';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private customerServive: CustomersService) {}

  /**
    Returns all information form customers
  */
  @Get()
  getCustomers() {
    return this.customerServive.findAll();
  }

  /**
    Returns specific information form a customer using its identifier
  */
  @Get(':customerId')
  getDetails(@Param('customerId') customerId: string) {
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
    @Param('customerId') customerId: string,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customerServive.update(customerId, payload);
  }

  /**
    Deletes a customer using its identifier
  */
  @Delete(':customerId')
  remove(@Param('customerId') customerId: string) {
    return this.customerServive.remove(customerId);
  }
}
