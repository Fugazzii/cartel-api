import { REPOSITORY_TOKEN } from "../../../tokens/adapter.tokens";
import { CocaineRepository } from "../repositories/cocaine.adapter";

export const CocaineRepositoryProvider = Object.freeze({
    provide: REPOSITORY_TOKEN,
    useClass: CocaineRepository
});
