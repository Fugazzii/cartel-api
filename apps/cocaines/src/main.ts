import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { CocainesModule } from './application/cocaines.module';

async function bootstrap() {
  const app = await NestFactory.create(
    CocainesModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        host: configService.get<string>("CACHE_HOST"),
        port: configService.get<number>("CACHE_PORT"),
      }),
      inject: [ConfigService],
    })
  );
  await app.listen(3000);
}

bootstrap();
