import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAccountDto, UpdateAccountDto } from 'src/users/dtos/account.dto';

import { AccountsService } from 'src/users/services/accounts/accounts.service';

@ApiTags('Customers')
@Controller('accounts')
export class AccountsController {
  constructor(private accountService: AccountsService) {}

  /**
    Returns all accounts information
  */
  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  /**
    Returns specific information from an account  using its identifier
  */
  @Get(':accountId')
  getDetails(@Param('accountId', ParseIntPipe) accountId: number) {
    return this.accountService.findOne(accountId);
  }

  /**
    Creates an account using a payload
  */
  @Post()
  create(@Body() payload: CreateAccountDto) {
    return this.accountService.create(payload);
  }

  /**
    Updates an account using its identifier and a payload
  */
  @Put(':accountId')
  update(
    @Param('accountId') accountId: number,
    @Body() payload: UpdateAccountDto,
  ) {
    return this.accountService.update(accountId, payload);
  }

  /**
    Deletes an account using its identifier
  */
  @Delete(':accountId')
  remove(@Param('accountId') accountId: number) {
    return this.accountService.remove(accountId);
  }
}
