import knex from "knex";

const config: knex.Knex.Config<unknown> = {
	client: "postgresql",
	connection: {
		host: process.env.POSTGRES_HOST,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: './migrations',
	},
};

export default config;