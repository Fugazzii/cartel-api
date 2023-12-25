import type { RedisKey, RedisValue } from "@app/redis";
import { REDIS_TOKEN, RedisService } from "@app/redis";

import { Inject, Injectable } from "@nestjs/common";
import type { ICacheRepository } from "@cocaines/usecases";

@Injectable()
export class RedisAdapter implements ICacheRepository {
    public constructor(
        @Inject(REDIS_TOKEN) private readonly redisService: RedisService
    ) {}

    public save<T extends RedisValue>(key: string, value: T): Promise<string>;
    public save<T extends RedisValue>(
        key: string,
        value: T,
        expireTime: number
    ): Promise<string>;
    public save<T extends RedisValue>(
        key: string,
        value: T,
        expireTime?: number
    ): Promise<string> {
        return this.redisService.set(key, value, expireTime ?? 86400);
    }

    public retrieve(key: string): Promise<string | null> {
        return this.redisService.get(key);
    }

    public remove(key: string): Promise<number> {
        return this.redisService.remove(key);
    }

    public clear(): Promise<string> {
        return this.redisService.clear();
    }

    public getTimeToLive(key: RedisKey): Promise<number> {
        return this.redisService.getTimeToLive(key);
    }
}
