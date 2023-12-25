import { Provider } from "@nestjs/common";
import { REPOSITORY_TOKEN } from "../../../../common/tokens/adapter.tokens";
import { CocaineRepository } from "../adapters/cocaine.adapter";

export const CocaineRepositoryProvider: Provider = {
    provide: REPOSITORY_TOKEN,
    useClass: CocaineRepository
};
