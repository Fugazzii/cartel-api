import { Inject, Injectable } from "@nestjs/common";
import type { GetOneCocaineUseCase } from "@cocaines/usecases";
import {
    ICacheRepository,
    IRepository,
    UseCase,
    UseCaseFactory
} from "@cocaines/usecases";
import type { Cocaine } from "@cocaines/domain";
import { REDIS_CLIENT, POSTGRES_REPOSITORY } from "@cocaines/common";

@Injectable()
export class CacheProxy {
    private readonly getOneProductUseCase: GetOneCocaineUseCase;

    public constructor(
        @Inject(REDIS_CLIENT) private readonly cacheService: ICacheRepository,
        @Inject(POSTGRES_REPOSITORY) cocaineRepo: IRepository
    ) {
        this.getOneProductUseCase = UseCaseFactory.create(
            UseCase.GetOneProduct,
            cocaineRepo
        );
    }

    public async getAndCache(id: number): Promise<Cocaine> {
        const ID = id.toString();
        console.log("👮‍♂️ Finding value in cache");
        const cachedValue: string | null = await this.cacheService.retrieve(ID);
        console.log("Cached value", cachedValue);

        if (cachedValue) {
            return JSON.parse(cachedValue);
        }

        const originValue = await this.getOneProductUseCase.execute(id);
        await this.cacheService.save(ID, JSON.stringify(originValue));
        return originValue;
    }
}
