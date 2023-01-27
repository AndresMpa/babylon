import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';

import { AdminsService } from 'src/users/services/admins/admins.service';

import { CreateAdminDto, UpdateAdminDto } from 'src/users/dtos/admins.dtos';

@Controller('admins')
export class AdminsController {
  constructor(private adminService: AdminsService) {}
  @Get(':adminId')
  getDetails(@Param('adminId', ParseIntPipe) adminId: number) {
    return {
      message: `Customer id ${adminId}`,
      data: this.adminService.findOne(adminId),
    };
  }

  @Post()
  create(@Body() payload: CreateAdminDto) {
    return {
      message: `Customer created`,
      data: this.adminService.create(payload),
    };
  }

  @Put(':adminId')
  update(
    @Param('adminId', ParseIntPipe) adminId: number,
    @Body() payload: UpdateAdminDto,
  ) {
    return {
      message: `Customer ${adminId} updates`,
      data: this.adminService.update(adminId, payload),
    };
  }

  @Delete(':adminId')
  remove(@Param('adminId', ParseIntPipe) adminId: number) {
    return {
      message: `Customer ${adminId} has been removed from DB`,
      data: this.adminService.remove(adminId),
    };
  }
}
