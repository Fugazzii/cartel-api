import { Module } from "@nestjs/common";
import { cacheConfig, dbConfig } from "./configs";
import { CocainesController } from "./controllers/cocaines.controller";
import { CocainesService } from "./services/cocaines.service";

import {
    InfrastructureModule,
    CocaineRepositoryProvider
} from "@cocaines/infrastructure";

import {
    PresentationModule,
    CocainesPresentation
} from "@cocaines/presentation";

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
        CocainesPresentation
    ]
})
export class CocainesModule { }
