import { RedisService } from "./redis.service";
import type { Provider } from "@nestjs/common";

export const REDIS_TOKEN = Symbol("REDIS_TOKEN");

export const provideRedis = (host: string, port: number): Provider =>
    Object.freeze({
        provide: REDIS_TOKEN,
        useValue: new RedisService(host, port)
    });
