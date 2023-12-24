import { DynamicModule, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { KnexModule, KnexModuleOptions } from "nestjs-knex";
import { CocaineRepository } from "./postgres/repositories/cocaine.adapter";

@Module({})
export class DatabaseModule {
    public static forRoot(databaseOptions: KnexModuleOptions): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [KnexModule.forRoot(databaseOptions)],
            providers: [CocaineRepository, ConfigService],
            exports: [CocaineRepository]
        };
    }
}
