import type { DynamicModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { RedisProvider } from "./redis/redis.provider";

export type CacheOptions = {
    host: string;
    port: number;
};

@Module({})
export class CacheModule {
    public static forRoot({ host, port }: CacheOptions): DynamicModule {

        const redisProvider = RedisProvider.provide(host, port);

        return {
            module: CacheModule,
            providers: [redisProvider],
            exports: [redisProvider]
        };
    }
}
