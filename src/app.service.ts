import { Inject, Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    private configService: ConfigService,
  ) {}

  getData() {
    const tasks = this.configService.get<string>('TASK_API');
    const apiKey = this.configService.get<string>('API_KEY');

    console.log(tasks, apiKey, this.apiKey, this.tasks);

    return {
      tasks,
      apiKey,
      'injected apiKey': this.apiKey,
      'injected task': this.tasks,
    };
  }
}
