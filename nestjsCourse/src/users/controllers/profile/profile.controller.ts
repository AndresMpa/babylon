import { Controller, Get, Req, UseGuards } from '@nestjs/common';

import { Request } from 'express';

import { ApiTags } from '@nestjs/swagger';

import { OrdersService } from '../../services/orders/orders.service';

import { PayloadToken } from 'src/auth/model/token.model';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';
import { Roles } from 'src/auth/decorators/roles/roles.decorator';
import { Role } from 'src/auth/model/roles.model';

@ApiTags('Profile')
@Controller('profile')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProfileController {
  constructor(private orderService: OrdersService) {}

  /*
    Returns orders information based on tokens
  */
  @Get('my-order')
  @Roles(Role.CUSTOMER)
  getOrders(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.orderService.ordersByCustomer(user.sub);
  }
}
