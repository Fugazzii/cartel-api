import { RedisService } from "./redis.service";

export const REDIS_TOKEN = Symbol("REDIS_TOKEN");

export const provideRedis = (host: string, port: number) => Object.freeze({
	provide: REDIS_TOKEN,
	useValue: new RedisService(host, port)
});