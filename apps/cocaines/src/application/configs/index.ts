import { configDotenv } from 'dotenv';
import { KnexModuleOptions } from "nestjs-knex";

configDotenv({
	path: "/usr/src/app/apps/cocaines/.env.dev"
});

export const dbConfig: KnexModuleOptions = Object.freeze({
	config: {
		client: "pg",
		connection: {
			host: process.env.POSTGRES_HOST,
			user: process.env.POSTGRES_USER,
			database: process.env.POSTGRES_DB,
			password: process.env.POSTGRES_PASSWORD
		}
	}
});

export const cacheConfig = Object.freeze({
	host: process.env.CACHE_HOST,
	port: Number(process.env.CACHE_PORT)
});
