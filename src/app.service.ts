import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(@Inject('MONGO') private dataBase: Db) {}

  getData() {
    console.log(this.dataBase);

    return 'Working';
  }

  getTasks() {
    const tasksCollection = this.dataBase.collection('tasks');
    return tasksCollection.find().toArray();
  }
}
