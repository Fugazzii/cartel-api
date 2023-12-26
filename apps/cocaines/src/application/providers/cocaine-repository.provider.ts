import type { Provider } from "@nestjs/common";
import { POSTGRES_REPOSITORY } from "@cocaines/common";
import {
    Infrastructure,
    InfrastructureFactory
} from "@cocaines/infrastructure";

export class CocaineRepository {
    public static instance: CocaineRepository | null;
    private static provider: Provider;

    /* eslint-disable */
    private constructor() { }
    /* eslint-enable */

    public static getProvider(): Provider {
        if (!CocaineRepository.instance) {
            CocaineRepository.instance = new CocaineRepository();
            CocaineRepository.provider = {
                provide: POSTGRES_REPOSITORY,
                useValue: InfrastructureFactory.create(Infrastructure.Postgres)
            };
        }

        return CocaineRepository.provider;
    }
}
