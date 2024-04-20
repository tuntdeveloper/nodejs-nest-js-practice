import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DefaultValuePipe, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      white
    }
  ))
  await app.listen(3000);
}
bootstrap();
