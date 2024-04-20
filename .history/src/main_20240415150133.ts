import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DefaultValuePipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new DefaultValuePipe)
  await app.listen(3000);
}
bootstrap();
