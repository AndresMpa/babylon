import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const stage = process.env.NODE_ENV === 'production';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // To ignore data that isn't in the DTOs
      forbidNonWhitelisted: true, // To send an error message if there's that shouldn't be there
      disableErrorMessages: stage, //To disable error message
    }),
  );
  await app.listen(3000);
}
bootstrap();
