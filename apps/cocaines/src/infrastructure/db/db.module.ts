import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { KnexModule } from "nestjs-knex";
import { CocaineRepository } from "./postgres/repositories/cocaine.adapter";

@Module({
	imports: [
		KnexModule.forRootAsync({
			useFactory: async (configService: ConfigService) => ({
				config: {
					client: "pg",
					connection: {
						host: configService.get<string>("POSTGRES_HOST"),
						port: configService.get<number>("POSTGRES_PORT"),
						database: configService.get<string>("POSTGRES_DB"),
						password: configService.get<string>("POSTGRES_PASSWORD"),
					}
				}
			}),
			inject: [ConfigService]
		})
	],
	providers: [CocaineRepository],
	exports: [CocaineRepository]
})
export class DatabaseModule { } 