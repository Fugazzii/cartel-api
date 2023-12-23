import { configDotenv } from "dotenv";
import knex from "knex";

configDotenv({
	path: "/usr/src/app/apps/cocaines/.env.dev"
});

const config: knex.Knex.Config<unknown> = {
	client: "postgresql",
	connection: {
		host: process.env.POSTGRES_HOST,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
	},
	migrations: {
		tableName: "knex_migrations",
		directory: process.env.MIGRATIONS_DIR,
	}
};

export default config;