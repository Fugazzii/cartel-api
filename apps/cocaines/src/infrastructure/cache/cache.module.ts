import { RedisModule, RedisService } from "@app/redis";
import { DynamicModule, Module } from "@nestjs/common";
import { CacheAdapter } from "./cache.adapter";
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
			imports: [
				RedisModule.forRoot(host, port)
			],
			providers: [
				provideRedis(host, port),
				CacheAdapter
			],
			exports: [
				CacheAdapter
			]
		};
	}

}