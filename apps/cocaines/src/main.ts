import { NestFactory } from '@nestjs/core';
import { CocainesModule } from './application/cocaines.module';

async function bootstrap() {
  const app = await NestFactory.create(CocainesModule);
  await app.listen(3000);
}
bootstrap();
