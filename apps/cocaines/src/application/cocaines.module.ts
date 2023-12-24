import { Module } from "@nestjs/common";
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { cacheConfig, dbConfig } from "./configs";
import { CocainesController } from "./controllers/cocaines.controller";
import { CocainesService } from "./services/cocaines.service";

@Module({
  imports: [
    InfrastructureModule.forRoot({
      cacheConfig,
      dbConfig
    })
  ],
  controllers: [CocainesController],
  providers: [CocainesService]
})
export class CocainesModule { }
