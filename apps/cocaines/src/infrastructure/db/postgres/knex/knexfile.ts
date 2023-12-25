import { configDotenv } from "dotenv";
import type knex from "knex";

configDotenv({
    path: "/usr/src/app/apps/cocaines/.env.dev"
});

const config: knex.Knex.Config = {
    client: "postgresql",
    connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    },
    migrations: {
        tableName: "knex_migrations",
        directory: process.env.MIGRATIONS_DIR ?? "./migrations"
    }
};

export default config;
