import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const stage = process.env.NODE_ENV === 'production';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // To ignore data that isn't in the DTOs
      forbidNonWhitelisted: true, // To send an error message if there's that shouldn't be there
      disableErrorMessages: stage, //To disable error message
    }),
  );

  // Documentation configuration
  const config = new DocumentBuilder()
    .setTitle('Documentation')
    .setDescription('An example of API description')
    .setVersion('1.0')
    .addTag('doc')
    .build();

  // Documentation instance
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
