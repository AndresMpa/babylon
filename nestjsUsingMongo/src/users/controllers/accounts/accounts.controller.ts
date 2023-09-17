import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
  Controller,
} from '@nestjs/common';

import {
  CreateAccountDto,
  UpdateAccountDto,
} from 'src/users/dtos/accounts.dto';

import { AccountsService } from 'src/users/services/accounts/accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private accountService: AccountsService) {}

  @Get()
  getAccounts() {
    return this.accountService.findAll();
  }

  @Get(':accountId')
  getDetails(@Param('accountId') accountId: string) {
    return this.accountService.findOne(accountId);
  }

  @Post()
  createAccount(@Body() payload: CreateAccountDto) {
    return this.accountService.create(payload);
  }

  @Put(':accountId')
  updateAccount(
    @Param('accountId') accountId: string,
    @Body() payload: UpdateAccountDto,
  ) {
    return this.accountService.update(accountId, payload);
  }

  @Delete(':accountId')
  deleteAccount(@Param('accountId') accountId: string) {
    return this.accountService.delete(accountId);
  }
}
