import { Inject, Injectable } from "@nestjs/common";

import type { ProduceCocaineDto } from "@cocaines/usecases";
import type { Cocaine } from "@cocaines/domain";
import type {
    ProduceCocaineUseCase,
    TraverseWarehouseUseCase,
    GetOneCocaineUseCase
} from "@cocaines/usecases";

import { UseCase, IRepository, UseCaseFactory } from "@cocaines/usecases";
import { REPOSITORY_TOKEN } from "@cocaines/infrastructure";

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

    public produceCocaine(
        produceCocaineDto: ProduceCocaineDto
    ): Promise<Cocaine> {
        return this.produceCocaineUseCase.execute(produceCocaineDto);
    }

    public traverseWholeWarehouse(): Promise<Array<Cocaine>> {
        return this.traverseWareHouseUseCase.execute();
    }

    public getOneProductById(id: number): Promise<Cocaine> {
        return this.getOneProductUseCase.execute(id);
    }
}
