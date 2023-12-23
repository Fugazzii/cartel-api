import { RedisModule, RedisService } from "@app/redis";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CacheAdapter } from "./cache.adapter";
import { REDIS_TOKEN } from "@app/redis/redis.provider";

@Module({})
export class CacheModule {

	public static forRoot(host: string, port: number) {
		return {
			module: CacheModule,
			import: [
				ConfigModule.forRoot({ envFilePath: "./env.dev" }),
				RedisModule.forRoot(host, port)
			],
			providers: [
				REDIS_TOKEN,
				RedisService,
				CacheAdapter
			],
			exports: [
				CacheAdapter
			]
		};
	}

}