import type { DynamicModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { KnexModuleOptions } from "nestjs-knex";
import { KnexModule } from "nestjs-knex";
import { CocaineRepositoryProvider } from "./postgres/providers/cocaine-repository";

@Module({})
export class DatabaseModule {
    public static forRoot(databaseOptions: KnexModuleOptions): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [KnexModule.forRoot(databaseOptions)],
            providers: [CocaineRepositoryProvider, ConfigService],
            exports: [CocaineRepositoryProvider]
        };
    }
}
