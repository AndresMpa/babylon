import { Module } from '@nestjs/common';

// Modules
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';

// Services
import { AuthenticationService } from './services/authentication/authentication.service';
import { LocalStrategy } from './strategies/local.strategy';

// Controllers
import { AuthenticationController } from './controllers/authentication/authentication.controller';

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy],
})
export class AuthModule {}
