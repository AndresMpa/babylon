import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

// Injectables
import { UsersModule } from 'src/users/users.module';

import { AuthenticationService } from './services/authentication/authentication.service';

import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthenticationService, LocalStrategy],
})
export class AuthModule {}
