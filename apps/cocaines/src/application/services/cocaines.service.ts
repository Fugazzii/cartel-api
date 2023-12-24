import { Inject, Injectable } from "@nestjs/common";
import { ProduceCocaineDto } from "../../core/usecases/dtos/produce-cocaine.dto";
import { Cocaine } from "../../core/domain";
import { REPOSITORY_TOKEN } from "../../infrastructure";
import {
    ProduceCocaineUseCase,
    TraverseWarehouseUseCase,
    GetOneCocaineUseCase,
    IRepository,
    UseCaseFactory
} from "../../core/usecases";
import { UseCase } from "../../core/usecases/use-case.token";

@Injectable()
export class CocainesService {
    private readonly produceCocaineUseCase: ProduceCocaineUseCase;
    private readonly traverseWareHouseUseCase: TraverseWarehouseUseCase;
    private readonly getOneProductUseCase: GetOneCocaineUseCase;

    public constructor(@Inject(REPOSITORY_TOKEN) cocaineRepo: IRepository) {
        this.produceCocaineUseCase = UseCaseFactory.create(
            UseCase.ProduceCocaine,
            cocaineRepo
        );
        this.traverseWareHouseUseCase = UseCaseFactory.create(
            UseCase.TraverseWarehouse,
            cocaineRepo
        );
        this.getOneProductUseCase = UseCaseFactory.create(
            UseCase.GetOneProduct,
            cocaineRepo
        );
    }

    public produceCocaine(produceCocaineDto: ProduceCocaineDto) {
        return this.produceCocaineUseCase.execute(produceCocaineDto);
    }

    public traverseWholeWarehouse(): Promise<Array<Cocaine>> {
        return this.traverseWareHouseUseCase.execute();
    }

    public getOneProductById(id: number): Promise<Cocaine> {
        return this.getOneProductUseCase.execute(id);
    }
}
