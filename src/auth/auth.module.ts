import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

// Injectables
import { AccountsService } from 'src/users/services/accounts/accounts.service';

import { AuthenticationService } from './services/authentication/authentication.service';

import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [AccountsService, PassportModule],
  providers: [AuthenticationService, LocalStrategy],
})
export class AuthModule {}
