import { Provider } from "@nestjs/common";
import { REPOSITORY_TOKEN } from "../../../tokens/adapter.tokens";
import { CocaineRepository } from "../adapters/cocaine.adapter";

export const CocaineRepositoryProvider: Provider = Object.freeze({
    provide: REPOSITORY_TOKEN,
    useClass: CocaineRepository
});
