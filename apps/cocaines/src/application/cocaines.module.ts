import { Module } from "@nestjs/common";
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { cacheConfig, dbConfig } from "./configs";

@Module({
  imports: [
    InfrastructureModule.forRoot({
      cacheConfig,
      dbConfig
    })
  ]
})
export class CocainesModule { }
