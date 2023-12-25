import { RedisService } from "./redis.service";
import type { Provider } from "@nestjs/common";

export const REDIS_TOKEN = Symbol("REDIS_TOKEN");

export class RedisProvider {

    public static instance: RedisProvider | null;

    private constructor() { }
    private static provider: Provider;

    public static provide(host: string, port: number): Provider {
        if (!RedisProvider.instance) {
            RedisProvider.instance = new RedisProvider();
            RedisProvider.provider = {
                provide: REDIS_TOKEN,
                useValue: new RedisService(host, port)
            };
        }
        return RedisProvider.provider;
    }
}