import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

// Authentication service
import { AuthenticationService } from 'src/auth/services/authentication/authentication.service';

// Account entity
import { Account } from 'src/users/entities/account.entity';

@ApiTags('Authentication')
@Controller('authentication')
@UseGuards(AuthGuard('local'))
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}
  /**
    Allow user to log in to the API
    @example: {
      "email": "mail@to.com",
      "role": "test"
    }
  */
  @Post('login')
  login(@Req() req: Request) {
    const user = req.user as Account;
    return this.authService.generateJWT(user);
  }
}
