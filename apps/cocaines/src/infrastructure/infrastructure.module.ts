import { DynamicModule, Module } from "@nestjs/common";
import { DatabaseModule } from "./db/db.module";
import { CacheModule, CacheOptions } from "./cache/cache.module";
import { KnexModuleOptions } from "nestjs-knex";

export type InfrastructureOptions = {
	cacheConfig: CacheOptions,
	dbConfig: KnexModuleOptions;
};

@Module({})
export class InfrastructureModule {

	public static forRoot({ cacheConfig, dbConfig }: InfrastructureOptions): DynamicModule {
		return {
			module: InfrastructureModule,
			imports: [
				DatabaseModule.forRoot(dbConfig),
				CacheModule.forRoot(cacheConfig),
			],
			providers: [],
			exports: [],
		};
	}

}
