import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { AccountsService } from 'src/users/services/accounts/accounts.service';
import { Account } from 'src/users/entities/account.entity';
import { PayloadToken } from 'src/auth/model/token.model';


@Injectable()
export class AuthenticationService {
  constructor(
    private accountService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.accountService.findByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return user;
      }
    } else {
      return null;
    }
  }

  generateJWT(user: Account) {
    const payload: PayloadToken = { role: user.role, sub: user.identifier };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
