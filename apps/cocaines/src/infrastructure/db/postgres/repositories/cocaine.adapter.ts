import { Injectable } from "@nestjs/common";
import { Cocaine } from "../../../../core/domain";
import { IRepository } from "../../../../core/usecases";
import { Knex } from "knex";
import { InjectKnex } from "nestjs-knex";

@Injectable()
export class CocaineRepository implements IRepository {

	public constructor(
		@InjectKnex() private readonly knex: Knex
	) { }

	public create<T>(newRecord: T): Cocaine {
		return null;
	}

}