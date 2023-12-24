import { ProduceCocaineDto } from "../dtos/produce-cocaine.dto";
import { IUseCase } from "../use-case.interface";
import { IRepository } from "../ports/db-repository.interface";
import { Cocaine } from "../../domain";

export class ProduceCocaineUseCase
    implements IUseCase<ProduceCocaineDto, Cocaine>
{
    public constructor(private readonly cocaineRepo: IRepository) {}

    public execute(newCocaine: ProduceCocaineDto): Promise<Cocaine> {
        return this.cocaineRepo.create(newCocaine);
    }
}
