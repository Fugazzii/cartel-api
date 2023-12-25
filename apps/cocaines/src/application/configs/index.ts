import { configDotenv } from "dotenv";
import type { KnexModuleOptions } from "nestjs-knex";

configDotenv({
    path: "/usr/src/app/apps/cocaines/.env.dev"
});

export const dbConfig: KnexModuleOptions = Object.freeze({
    config: {
        client: "pg",
        connection: {
            host: process.env.POSTGRES_HOST as string,
            user: process.env.POSTGRES_USER as string,
            database: process.env.POSTGRES_DB as string,
            password: process.env.POSTGRES_PASSWORD as string
        }
    }
});

export const cacheConfig = Object.freeze({
    host: process.env.REDIS_HOST as string,
    port: Number(process.env.REDIS_PORT)
});
