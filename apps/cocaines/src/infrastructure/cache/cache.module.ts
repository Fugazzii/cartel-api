import type { DynamicModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { RedisAdapter } from "./redis/redis.adapter";
import { RedisModule, RedisProvider } from "@app/redis";

export type CacheOptions = {
    host: string;
    port: number;
};

@Module({})
export class CacheModule {
    public static forRoot({ host, port }: CacheOptions): DynamicModule {
        return {
            module: CacheModule,
            imports: [RedisModule.forRoot(host, port)],
            providers: [RedisAdapter, RedisProvider.provide(host, port)],
            exports: [RedisAdapter]
        };
    }
}
