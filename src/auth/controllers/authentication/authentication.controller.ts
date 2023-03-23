import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('Authentication')
@Controller('authentication')
@UseGuards(AuthGuard('local'))
export class AuthenticationController {
  /**
    Allow user to log in to the API
    @example: {
      "email": "mail@to.com",
      "password": "something"
    }
  */
  @Post('login')
  login(@Req() req: Request) {
    return req.user;
  }
}
