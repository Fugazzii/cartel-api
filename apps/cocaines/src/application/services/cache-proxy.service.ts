import { Inject, Injectable } from "@nestjs/common";
import type { GetOneCocaineUseCase } from "@cocaines/usecases";
import {
    ICacheRepository,
    IRepository,
    UseCase,
    UseCaseFactory
} from "@cocaines/usecases";
import type { Cocaine } from "@cocaines/domain";
import { CACHE_TOKEN, REPOSITORY_TOKEN } from "@cocaines/common";

@Injectable()
export class CacheProxy {
    private readonly getOneProductUseCase: GetOneCocaineUseCase;

    public constructor(
        @Inject(CACHE_TOKEN) private readonly cacheService: ICacheRepository,
        @Inject(REPOSITORY_TOKEN) cocaineRepo: IRepository
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
