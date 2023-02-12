import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from 'src/users/entities/account.entity';
import { CreateAccountDto, UpdateAccountDto } from 'src/users/dtos/account.dto';
import { CustomersService } from '../customers/customers.service';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    private customersService: CustomersService,
  ) {}

  async findAll() {
    return await this.accountRepository.find({
      relations: ['customer'],
    });
  }

  async findOne(identifier: number) {
    const account = await this.accountRepository.findOneBy({ identifier });
    if (!account) {
      throw new NotFoundException(
        `There's no a account assigned to ${identifier} identifier`,
      );
    } else {
      return account;
    }
  }

  async create(payload: CreateAccountDto) {
    const newAccount = await this.accountRepository.create(payload);
    if (payload.customerIdentifier) {
      const customer = await this.customersService.findOne(
        payload.customerIdentifier,
      );
      newAccount.customer = customer;
    }
    return this.accountRepository.save(newAccount);
  }

  async update(identifier: number, payload: UpdateAccountDto) {
    const account = await this.findOne(identifier);
    this.accountRepository.merge(account, payload);
  }

  async remove(identifier: number) {
    return await this.accountRepository.delete(identifier);
  }
}
