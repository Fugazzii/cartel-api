import { Injectable } from "@nestjs/common";
import type { Cocaine } from "@cocaines/domain";
import type { IRepository, ProduceCocaineDto } from "@cocaines/usecases";
import { Knex } from "knex";
import { InjectKnex } from "nestjs-knex";

@Injectable()
export class CocaineRepository implements IRepository {

    private readonly tableName: string;

    public constructor(@InjectKnex() private readonly knex: Knex) {
        this.tableName = "cocaines";
    }

    public create(newRecord: ProduceCocaineDto): Promise<Cocaine> {
        return this.knex
            .table<Cocaine>(this.tableName)
            .insert<Cocaine>(newRecord)
            .returning<Cocaine>("*");
    }

    public findAll(): Promise<Array<Cocaine>> {
        return this.knex
            .select("*")
            .from<Cocaine>(this.tableName);
    }

    public findOne(id: number): Promise<Cocaine> {
        return this.knex
            .select("*")
            .from<Cocaine>(this.tableName)
            .where({ id })
            .first<Cocaine>();
    }
}
