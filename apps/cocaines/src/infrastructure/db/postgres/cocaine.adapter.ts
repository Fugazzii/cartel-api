import type { Cocaine, DbConfigOptions } from "@cocaines/domain";
import type { IRepository, ProduceCocaineInput } from "@cocaines/usecases";
import { knex } from "knex";

export class CocaineAdapter implements IRepository {
    private readonly tableName: string;
    private readonly queryBuilder: knex.Knex;

    public constructor(dbConfig: DbConfigOptions) {
        this.tableName = "cocaines";
        this.queryBuilder = knex({
            client: "postgresql",
            connection: {
                ...dbConfig
            }
        });
    }

    public create(produceCocaineInput: ProduceCocaineInput): Promise<Cocaine> {
        return this.queryBuilder
            .table<Cocaine>(this.tableName)
            .insert<Cocaine>(produceCocaineInput)
            .returning<Cocaine>("*")
            .first<Cocaine>();
    }

    public findAll(): Promise<Array<Cocaine>> {
        return this.queryBuilder.select("*").from<Cocaine>(this.tableName);
    }

    public findOne(id: number): Promise<Cocaine> {
        return this.queryBuilder
            .select("*")
            .from<Cocaine>(this.tableName)
            .where({ id })
            .first<Cocaine>();
    }
}
