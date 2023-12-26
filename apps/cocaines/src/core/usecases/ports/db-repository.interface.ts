import type { Cocaine } from "@cocaines/domain";
import type { ProduceCocaineInput } from "../types/produce-cocaine.input";

export interface IRepository {
    create(produceCocaineDto: ProduceCocaineInput): Promise<Cocaine>;
    findAll(): Promise<Array<Cocaine>>;
    findOne(id: number): Promise<Cocaine>;
}
