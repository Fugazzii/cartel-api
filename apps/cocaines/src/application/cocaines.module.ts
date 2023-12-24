import { DynamicModule, Module } from "@nestjs/common";
import { InfrastructureModule, InfrastructureModuleAsyncOptions } from '../infrastructure/infrastructure.module';

@Module({})
export class CocainesModule {
  public static forRootAsync(options: InfrastructureModuleAsyncOptions): DynamicModule {
    return {
      module: CocainesModule,
      imports: [
        InfrastructureModule.forRootAsync(options),
      ],
    };
  }
}
