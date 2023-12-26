import { configDotenv } from "dotenv";
import type { DbConfigOptions, CacheConfigOptions, PubSubConfigOptions } from "@cocaines/domain";

configDotenv({
    path: "/usr/src/app/apps/cocaines/.env.dev"
});

export const dbConfig: DbConfigOptions = {
    host: process.env.POSTGRES_HOST as string,
    user: process.env.POSTGRES_USER as string,
    database: process.env.POSTGRES_DB as string,
    password: process.env.POSTGRES_PASSWORD as string,
    port: Number(process.env.POSTGRES_PORT) as number
};

export const cacheConfig: CacheConfigOptions = {
    host: process.env.REDIS_HOST as string,
    port: Number(process.env.REDIS_PORT)
};

export const pubSubConfig: PubSubConfigOptions = {
    host: process.env.NATS_HOST as string,
    port: Number(process.env.NATS_PORT)
};