import { REDIS_CLIENT } from "@cocaines/common";
import {
    Infrastructure,
    InfrastructureFactory
} from "@cocaines/infrastructure";
import type { Provider } from "@nestjs/common";

export class RedisClient {
    public static instance: RedisClient | null;
    private static provider: Provider;

    /* eslint-disable */
    private constructor() { }
    /* eslint-enable */

    public static getProvider(): Provider {
        if (!RedisClient.instance) {
            RedisClient.instance = new RedisClient();
            RedisClient.provider = {
                provide: REDIS_CLIENT,
                useValue: InfrastructureFactory.create(Infrastructure.Redis)
            };
        }
        return RedisClient.provider;
    }
}
