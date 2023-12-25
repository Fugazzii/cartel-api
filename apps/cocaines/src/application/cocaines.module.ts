import { Module } from "@nestjs/common";
import { cacheConfig, dbConfig } from "./configs";
import { CocainesController } from "./controllers/cocaines.controller";
import { CocainesService } from "./services/cocaines.service";

import {
    InfrastructureModule,
    CocaineRepositoryProvider,
    RedisRepository,
    RedisProvider
} from "@cocaines/infrastructure";

import {
    PresentationModule,
    CocainesPresentation
} from "@cocaines/presentation";
import { CacheProxy } from "./services/cache-proxy.service";

@Module({
    imports: [
        InfrastructureModule.forRoot({
            cacheConfig,
            dbConfig
        }),
        PresentationModule.forRoot()
    ],
    controllers: [
        CocainesController
    ],
    providers: [
        CocainesService,
        CocaineRepositoryProvider,
        CocainesPresentation,
        CacheProxy,
        RedisProvider.provide(process.env.REDIS_HOST, +process.env.REDIS_PORT)
    ]
})
export class CocainesModule { }
