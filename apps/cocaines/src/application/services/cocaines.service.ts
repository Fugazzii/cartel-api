import { Inject, Injectable } from "@nestjs/common";

import type { Cocaine } from "@cocaines/domain";
import type {
    ProduceCocaineUseCase,
    TraverseWarehouseUseCase
} from "@cocaines/usecases";

import { UseCase, IRepository, UseCaseFactory } from "@cocaines/usecases";
import { CacheProxy } from "./cache-proxy.service";
import { POSTGRES_REPOSITORY } from "@cocaines/common";
import type { ProduceCocaineDto } from "../dtos/produce-cocaine.dto";

@Injectable()
export class CocainesInteractor {
    private readonly produceCocaineUseCase: ProduceCocaineUseCase;
    private readonly traverseWareHouseUseCase: TraverseWarehouseUseCase;

    public constructor(
        @Inject(POSTGRES_REPOSITORY) cocaineRepo: IRepository,
        private readonly cacheProxy: CacheProxy
    ) {
        this.produceCocaineUseCase = UseCaseFactory.create(
            UseCase.ProduceCocaine,
            cocaineRepo
        );
        this.traverseWareHouseUseCase = UseCaseFactory.create(
            UseCase.TraverseWarehouse,
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
        console.log("Executing cache proxy");
        return this.cacheProxy.getAndCache(id);
    }
}
