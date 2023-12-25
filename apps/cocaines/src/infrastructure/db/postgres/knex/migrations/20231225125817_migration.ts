import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	return await knex.schema.createTable(
		"cocaines",
		(table: Knex.CreateTableBuilder) => {
			table.increments("id").primary();
			table.float("weight").notNullable();
			table.string("origin").notNullable();
			table.float("price_per_kg").notNullable();
			table.timestamps(true, true);
		}
	);
}

export async function down(knex: Knex): Promise<void> {
	return await knex.schema.dropTable("cocaines");
}