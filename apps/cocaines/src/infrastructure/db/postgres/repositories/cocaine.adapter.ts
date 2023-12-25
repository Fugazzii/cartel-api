import { Injectable } from "@nestjs/common";
import { Cocaine } from "@cocaines/domain";
import { IRepository } from "@cocaines/usecases";
import { Knex } from "knex";
import { InjectKnex } from "nestjs-knex";

@Injectable()
export class CocaineRepository implements IRepository {
    private readonly tableName: string;

    public constructor(@InjectKnex() private readonly knex: Knex) {
        this.tableName = "cocaines";
    }

    public create<T>(newRecord: T): Promise<Cocaine> {
        return this.knex
            .table<Cocaine>(this.tableName)
            .insert<Cocaine>(newRecord)
            .returning<Cocaine>("*")
            .first<Cocaine>();
    }

    public findAll(): Promise<Array<Cocaine>> {
        return this.knex.select("*").from<Cocaine>(this.tableName);
    }

    public findOne(id: number): Promise<Cocaine> {
        return this.knex
            .select("*")
            .from<Cocaine>(this.tableName)
            .where({ id })
            .first<Cocaine>();
    }
}
