import { Inject, Injectable } from "@nestjs/common";
import { CreateCocaineUseCase } from "../../core/usecases/impls/create-cocaine";
import { CreateCocaineDto } from "../../core/usecases/dtos/create-cocaine.dto";
import { FindAllCocaineUseCase } from "../../core/usecases/impls/find-all-cocaine";
import { FindOneCocaineUseCase } from "../../core/usecases/impls/find-one-cocaine";
import { Cocaine } from "../../core/domain";

@Injectable()
export class CocainesService {
    public constructor(
        @Inject() private readonly createCocaineUseCase: CreateCocaineUseCase,
        @Inject() private readonly findAllCocaineUseCase: FindAllCocaineUseCase,
        @Inject() private readonly findOneCocaineUseCase: FindOneCocaineUseCase
    ) {}

    public produceCocaine(createCocaineDto: CreateCocaineDto) {
        return this.createCocaineUseCase.execute(createCocaineDto);
    }

    public traverseWholeWarehouse(): Promise<Array<Cocaine>> {
        return this.findAllCocaineUseCase.execute();
    }

    public getOneProductById(id: number): Promise<Cocaine> {
        return this.findOneCocaineUseCase.execute(id);
    }
}
