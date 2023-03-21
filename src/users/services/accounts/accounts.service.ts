import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { Account } from 'src/users/entities/account.entity';

import { CreateAccountDto, UpdateAccountDto } from 'src/users/dtos/account.dto';

import { CustomersService } from '../customers/customers.service';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    private customersService: CustomersService,
  ) {}

  async findAll() {
    return await this.accountRepository.find({
      select: ['email', 'role'],
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

  async findByEmail(email: string) {
    return await this.accountRepository.find({ where: { email } });
  }

  async create(payload: CreateAccountDto) {
    const newAccount = await this.accountRepository.create(payload);
    const hashPassword = await bcrypt.hash(newAccount.password, 10);
    newAccount.password = hashPassword;
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
    return this.accountRepository.save(account);
  }

  async remove(identifier: number) {
    return await this.accountRepository.delete(identifier);
  }
}
