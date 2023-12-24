import { Cocaine } from "../../domain/cocaine";
import { ProduceCocaineDto } from "../dtos/produce-cocaine.dto";

export interface IRepository {
    create(produceCocaineDto: ProduceCocaineDto): Promise<Cocaine>;
    findAll(): Promise<Array<Cocaine>>;
    findOne(id: number): Promise<Cocaine>;
}
