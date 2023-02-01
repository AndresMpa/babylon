import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
    Returns a simple example
  */
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
