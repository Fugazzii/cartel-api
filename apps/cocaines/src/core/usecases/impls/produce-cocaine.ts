import type { ProduceCocaineDto } from "../dtos/produce-cocaine.dto";
import type { IUseCase } from "../use-case.interface";
import type { IRepository } from "../ports/db-repository.interface";
import type { Cocaine } from "../../domain";

export class ProduceCocaineUseCase
    implements IUseCase<ProduceCocaineDto, Cocaine>
{
    public constructor(private readonly cocaineRepo: IRepository) { }

    public execute(newCocaine: ProduceCocaineDto): Promise<Cocaine> {
        console.log("usecase");
        return this.cocaineRepo.create(newCocaine);
    }
}
