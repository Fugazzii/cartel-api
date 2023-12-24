import { Cocaine } from "../../domain/cocaine";
import { CreateCocaineDto } from "../dtos/create-cocaine.dto";

export interface IRepository {
    create(createCocaineDto: CreateCocaineDto): Promise<Cocaine>;
    findAll(): Promise<Array<Cocaine>>;
    findOne(id: number): Promise<Cocaine>;
}
