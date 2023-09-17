import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pg';

import { ConfigService, ConfigType } from '@nestjs/config';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('POSTGRES') private postgresInstance: Client,

    @Inject(config.KEY) private configAsType: ConfigType<typeof config>,

    private configService: ConfigService,
  ) {}

  getData() {
    const tasksFromInjection = this.configService.get<string>('TASK_API');
    const apiKeyFromInjection = this.configService.get<string>('API_KEY');

    const dataBase = this.configAsType.database;

    console.log(tasksFromInjection, apiKeyFromInjection, dataBase);

    return {
      tasksFromInjection,
      apiKeyFromInjection,
      dataBase,
    };
  }

  getTask() {
    return new Promise((resolve, reject) => {
      this.postgresInstance.query('SELECT * FROM tasks', (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.rows);
        }
      });
    });
  }
}
