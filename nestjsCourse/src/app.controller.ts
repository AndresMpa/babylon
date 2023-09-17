import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

import { ApiKeyGuard } from './auth/guards/api-key/api-key.guard';
import { Public } from './auth/decorators/public/public.decorator';

@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
    Returns a simple example
  */
  @Public()
  @Get()
  getExample() {
    return this.appService.getData();
  }

  /**
    Returns tasks from postgres
  */
  @Get('task')
  getTask() {
    return this.appService.getTask();
  }
}
