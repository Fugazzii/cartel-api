import { Injectable } from "@nestjs/common";
import Redis from "ioredis";

export type RedisKey = string | Buffer;
export type RedisValue = string | number | Buffer;

export class RedisService {
	private redisClient: Redis;

	public constructor(host: string, port: number) {
		this.redisClient = new Redis({ host, port });
	}

	public get(key: RedisKey): Promise<string | null> {
		return this.redisClient.get(key);
	}

	public set(
		key: RedisKey,
		value: RedisValue,
		expireTime?: number
	): Promise<string> {
		return this.redisClient.set(key, value, "EX", expireTime || 86400);
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