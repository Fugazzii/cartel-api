import type { IRepository } from "./ports/db-repository.interface";
import { GetOneCocaineUseCase } from "./impls/get-one-product";
import { ProduceCocaineUseCase } from "./impls/produce-cocaine";
import { TraverseWarehouseUseCase } from "./impls/traverse-warehouse";
import { UseCase } from "./use-case.token";

export class UseCaseFactory {
    private static readonly Mapper = Object.freeze({
        [UseCase.ProduceCocaine]: ProduceCocaineUseCase,
        [UseCase.GetOneProduct]: GetOneCocaineUseCase,
        [UseCase.TraverseWarehouse]: TraverseWarehouseUseCase
    });

    public static create<T extends keyof typeof UseCaseFactory.Mapper>(
        token: T,
        repo: IRepository
    ): InstanceType<(typeof UseCaseFactory.Mapper)[T]> {
        type UseCaseConstructor = {
            new (repo: IRepository): InstanceType<
                (typeof UseCaseFactory.Mapper)[T]
            >;
        };

        return new (UseCaseFactory.Mapper[token] as UseCaseConstructor)(repo);
    }
}
