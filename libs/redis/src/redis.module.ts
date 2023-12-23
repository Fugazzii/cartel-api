import { DynamicModule, Module } from '@nestjs/common';
import { REDIS_TOKEN, provideRedis } from './redis.provider';

@Module({})
export class RedisModule {

  public static forRoot(host: string, port: number): DynamicModule {

    const RedisProvider = provideRedis(host, port);

    return {
      module: RedisModule,
      providers: [RedisProvider],
      exports: [REDIS_TOKEN, RedisProvider]
    };
  }

}
