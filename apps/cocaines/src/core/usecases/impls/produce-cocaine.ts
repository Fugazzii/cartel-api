import type { IUseCase } from "../use-case.interface";
import type { IRepository } from "../ports/db-repository.interface";
import type { Cocaine } from "../../domain";
import type { ProduceCocaineInput } from "../types/produce-cocaine.input";

export class ProduceCocaineUseCase
    implements IUseCase<ProduceCocaineInput, Cocaine>
{
    public constructor(private readonly cocaineRepo: IRepository) {}

    public execute(newCocaine: ProduceCocaineInput): Promise<Cocaine> {
        console.log("usecase");
        return this.cocaineRepo.create(newCocaine);
    }
}
