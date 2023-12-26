import { Module } from "@nestjs/common";
import { CocainesController } from "./controllers/cocaines.controller";
import { CocainesInteractor } from "./services/cocaines.service";

import {
    PresentationModule,
    CocainesPresentation
} from "@cocaines/presentation";
import { CacheProxy } from "./services/cache-proxy.service";

import { CocaineRepository } from "./providers/cocaine-repository.provider";
import { RedisRepository } from "./providers/redis-repository.provider";

@Module({
    imports: [PresentationModule.forRoot()],
    controllers: [CocainesController],
    providers: [
        CocainesInteractor,
        CocainesPresentation,
        CacheProxy,
        CocaineRepository.getProvider(),
        RedisRepository.getProvider()
    ]
})
export class CocainesModule {}
