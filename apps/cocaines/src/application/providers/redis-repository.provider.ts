import { CACHE_TOKEN } from "@cocaines/common";
import {
    Infrastructure,
    InfrastructureFactory
} from "@cocaines/infrastructure";
import type { Provider } from "@nestjs/common";

export class RedisRepository {
    public static instance: RedisRepository | null;
    private static provider: Provider;

    /* eslint-disable */
    private constructor() { }
    /* eslint-enable */

    public static getProvider(): Provider {
        if (!RedisRepository.instance) {
            RedisRepository.instance = new RedisRepository();
            RedisRepository.provider = {
                provide: CACHE_TOKEN,
                useValue: InfrastructureFactory.create(Infrastructure.Redis)
            };
        }
        return RedisRepository.provider;
    }
}
