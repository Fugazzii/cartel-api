import Redis from "ioredis";
import type { ICacheRepository } from "@cocaines/usecases";
import type { CacheConfigOptions } from "@cocaines/domain";

export type RedisKey = string | Buffer;
export type RedisValue = string | number | Buffer;

export class RedisAdapter implements ICacheRepository {
    private readonly redisClient: Redis;

    public constructor({ host, port }: CacheConfigOptions) {
        this.redisClient = new Redis({ host, port });

        this.redisClient.once("connecting", () =>
            console.log("⌚ Connecting to Redis...", host, port)
        );
        this.redisClient.once("connect", () =>
            console.log("🚀 Successfully Connected to Redis!")
        );
        this.redisClient.once("error", (err) =>
            console.log("❌ Failed to connect to Redis.", err)
        );
    }

    public retrieve(key: RedisKey): Promise<string | null> {
        return this.redisClient.get(key);
    }

    public save(
        key: RedisKey,
        value: RedisValue,
        expireTime?: number
    ): Promise<string> {
        return this.redisClient.set(key, value, "EX", expireTime ?? 86400);
    }

    public remove(key: string): Promise<number> {
        return this.redisClient.del(key);
    }

    public clear(): Promise<string> {
        return this.redisClient.flushall();
    }

    public getTimeToLive(key: RedisKey): Promise<number> {
        return this.redisClient.ttl(key);
    }
}
