import { RedisModule } from "@app/redis";
import { DynamicModule, Module } from "@nestjs/common";
import { RedisAdapter } from "./redis/redis.adapter";
import { provideRedis } from "@app/redis/redis.provider";

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
            providers: [provideRedis(host, port), RedisAdapter],
            exports: [RedisAdapter]
        };
    }
}
