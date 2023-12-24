import { RedisModule, RedisService } from "@app/redis";
import { DynamicModule, Module } from "@nestjs/common";
import { CacheAdapter } from "./cache.adapter";

@Module({})
export class CacheModule {

	public static forRoot(host: string, port: number): DynamicModule {
		return {
			module: CacheModule,
			imports: [
				RedisModule.forRoot(host, port)
			],
			providers: [
				RedisService,
				CacheAdapter
			],
			exports: [
				CacheAdapter
			]
		};
	}

}