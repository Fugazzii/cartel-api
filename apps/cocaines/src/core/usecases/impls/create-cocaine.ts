import { Inject, Injectable } from "@nestjs/common";
import { CreateCocaineDto } from "../dtos/create-cocaine.dto";
import { IUseCase } from "../use-case.interface";
import { REPOSITORY_TOKEN } from "apps/cocaines/src/common";
import { IRepository } from "../ports/db-repository.interface";
import { Cocaine } from "../../domain";

@Injectable()
export class CreateCocaineUseCase implements IUseCase<CreateCocaineDto, void> {
    public constructor(
        @Inject(REPOSITORY_TOKEN) private readonly cocaineRepo: IRepository
    ) {}

    public execute(newCocaine: CreateCocaineDto): Promise<Cocaine> {
        return this.cocaineRepo.create(newCocaine);
    }
}
