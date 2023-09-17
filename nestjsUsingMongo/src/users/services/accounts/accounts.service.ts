import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Account } from 'src/users/entities/account.entity';

import {
  CreateAccountDto,
  UpdateAccountDto,
} from 'src/users/dtos/accounts.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
  ) {}

  async findAll() {
    return await this.accountModel.find();
  }

  async findOne(identifier: string) {
    return await this.accountModel.findById(identifier);
  }

  async create(payload: CreateAccountDto) {
    const newAccount = new this.accountModel(payload);
    return await newAccount.save();
  }

  async update(identifier: string, payload: UpdateAccountDto) {
    return await this.accountModel.findByIdAndUpdate(
      identifier,
      { $set: payload },
      { new: true },
    );
  }

  async delete(identifier: string) {
    return await this.accountModel.findByIdAndDelete(identifier);
  }
}
