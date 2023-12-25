import type { Provider } from "@nestjs/common";
import { RedisRepository } from "./redis.adapter";
import { CACHE_TOKEN } from "@cocaines/common";

export class RedisProvider {
	public static instance: RedisProvider | null;

	private constructor() { }
	private static provider: Provider;

	public static provide(host: string, port: number): Provider {
		if (!RedisProvider.instance) {
			RedisProvider.instance = new RedisProvider();
			RedisProvider.provider = {
				provide: CACHE_TOKEN,
				useValue: new RedisRepository(host, port)
			};
		}
		return RedisProvider.provider;
	}
}