import { DynamicModule, Module, Provider } from "@nestjs/common";
import { DatabaseModule } from "./db/db.module";
import { CacheModule } from "./cache/cache.module";

type ConnectionOptions = {
	host: string;
	port: number;
};

export interface InfrastructureModuleAsyncOptions {
	useFactory: (...args: any[]) => Promise<ConnectionOptions> | ConnectionOptions;
	inject?: any[];
}

@Module({})
export class InfrastructureModule {
	public static forRoot(options: ConnectionOptions): DynamicModule {
		return {
			module: InfrastructureModule,
			imports: [
				DatabaseModule,
				CacheModule.forRoot(options.host, options.port),
			],
			providers: [],
			exports: [],
		};
	}

	public static forRootAsync(options: InfrastructureModuleAsyncOptions): DynamicModule {
		const asyncProviders = this.createAsyncProviders(options);

		return {
			module: InfrastructureModule,
			imports: [DatabaseModule, CacheModule],
			providers: [...asyncProviders],
			exports: [],
		};
	}

	private static createAsyncProviders(options: InfrastructureModuleAsyncOptions): Provider[] {
		return [
			{
				provide: "INFRASTRUCTURE_MODULE_OPTIONS",
				useFactory: options.useFactory,
				inject: options.inject || [],
			},
			{
				provide: "CONNECTION_OPTIONS_TOKEN",
				useFactory: async (options: InfrastructureModuleAsyncOptions) =>
					await options.useFactory(...options.inject),
				inject: ['INFRASTRUCTURE_MODULE_OPTIONS'],
			},
		];
	}
}
