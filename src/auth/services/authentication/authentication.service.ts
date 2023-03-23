import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { AccountsService } from 'src/users/services/accounts/accounts.service';

@Injectable()
export class AuthenticationService {
  constructor(private accountService: AccountsService) {}

  async validateUser(email: string, password: string) {
    const user = await this.accountService.findByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      return user;
    } else {
      return null;
    }
  }
}
