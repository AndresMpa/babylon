import { Inject, Injectable } from '@nestjs/common';

import { ConfigService, ConfigType } from '@nestjs/config';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],

    @Inject(config.KEY) private configAsType: ConfigType<typeof config>,

    private configService: ConfigService,
  ) {}

  getData() {
    const tasksFromInjection = this.configService.get<string>('TASK_API');
    const apiKeyFromInjection = this.configService.get<string>('API_KEY');

    const apiKeyFromType = this.configAsType.apiKey;
    const dataBase = this.configAsType.database;

    console.log(
      this.apiKey,
      this.tasks,
      tasksFromInjection,
      apiKeyFromInjection,
      dataBase,
      apiKeyFromType,
    );

    return {
      'injected apiKey': this.apiKey,
      'injected task': this.tasks,
      tasksFromInjection,
      apiKeyFromInjection,
      dataBase,
      apiKeyFromType,
    };
  }
}
