import type { DynamicModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "./db/db.module";
import type { CacheOptions } from "./cache/cache.module";
import { CacheModule } from "./cache/cache.module";
import type { KnexModuleOptions } from "nestjs-knex";
import { CocaineRepositoryProvider } from "./db";

export type InfrastructureOptions = {
    cacheConfig: CacheOptions;
    dbConfig: KnexModuleOptions;
};

@Module({})
export class InfrastructureModule {
    public static forRoot({
        cacheConfig,
        dbConfig
    }: InfrastructureOptions): DynamicModule {
        return {
            module: InfrastructureModule,
            imports: [
                DatabaseModule.forRoot(dbConfig),
                CacheModule.forRoot(cacheConfig)
            ],
            providers: [CocaineRepositoryProvider],
            exports: [CocaineRepositoryProvider]
        };
    }
}
