import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(@Inject('MONGO') private dataBase: Db) {}

  getData() {
    return 'Doc at localhost:3000/doc';
  }

  getTasks() {
    const tasksCollection = this.dataBase.collection('tasks');
    return tasksCollection.find().toArray();
  }
}
