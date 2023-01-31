import { HttpModule, HttpService } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

const API_KEY = 'somewhere.com/somedata&something=1';
const PROD_API_KEY = 'prodenv.com/proddata&something=prod';

@Global()
@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? PROD_API_KEY : API_KEY,
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const toDo = await http.get(
          'https://jsonplaceholder.typicode.com/todos',
        );

        return toDo;
      },
      inject: [HttpService],
    },
  ],
  exports: ['API_KEY', 'TASKS'],
})
export class DatabaseModule {}
