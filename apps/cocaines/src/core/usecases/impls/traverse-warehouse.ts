import { Cocaine } from "../../domain";
import { IUseCase } from "../use-case.interface";
import { IRepository } from "../ports/db-repository.interface";

export class TraverseWarehouseUseCase
    implements IUseCase<undefined, Array<Cocaine>>
{
    public constructor(private readonly cocaineRepo: IRepository) {}

    public execute(): Promise<Array<Cocaine>> {
        return this.cocaineRepo.findAll();
    }
}
