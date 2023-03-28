import { Module } from '@nestjs/common';

// Modules
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

// Services
import { AuthenticationService } from './services/authentication/authentication.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

// Controllers
import { AuthenticationController } from './controllers/authentication/authentication.controller';

import { ConfigType } from '@nestjs/config';
import config from 'src/config';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.secure.secret,
          signOptions: {
            expiresIn: configService.secure.expiration,
          },
        };
      },
    }),
  ],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy],
  controllers: [AuthenticationController],
})
export class AuthModule {}
