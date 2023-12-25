import type { DynamicModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { REDIS_TOKEN, RedisProvider } from "./redis.provider";

@Module({})
export class RedisModule {
    public static forRoot(host: string, port: number): DynamicModule {

        const redisProvider = RedisProvider.provide(host, port);

        return {
            module: RedisModule,
            providers: [redisProvider],
            exports: [REDIS_TOKEN, redisProvider]
        };
    }
}
