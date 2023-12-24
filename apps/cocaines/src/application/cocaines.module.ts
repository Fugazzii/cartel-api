import { Module } from "@nestjs/common";
import { cacheConfig, dbConfig } from "./configs";
import { CocainesController } from "./controllers/cocaines.controller";
import { CocainesService } from "./services/cocaines.service";
import {
    InfrastructureModule,
    CocaineRepositoryProvider
} from "../infrastructure";
import { PresentationModule, CocainesPresentation } from "../presentation";

@Module({
    imports: [
        InfrastructureModule.forRoot({
            cacheConfig,
            dbConfig
        }),
        PresentationModule
    ],
    controllers: [CocainesController],
    providers: [
        CocainesService,
        CocaineRepositoryProvider,
        CocainesPresentation
    ]
})
export class CocainesModule {}
