import { Cocaine } from "../../domain";
import { IUseCase } from "../use-case.interface";
import { IRepository } from "../ports/db-repository.interface";

export class GetOneCocaineUseCase implements IUseCase<undefined, Cocaine> {
    public constructor(private readonly cocaineRepo: IRepository) {}

    public execute(id: number): Promise<Cocaine> {
        return this.cocaineRepo.findOne(id);
    }
}
