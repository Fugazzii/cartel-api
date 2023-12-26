import type { DynamicModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { CocainesPresentation } from "@cocaines/presentation";

@Module({})
export class PresentationModule {
    public static forRoot(): DynamicModule {
        return {
            module: PresentationModule,
            providers: [CocainesPresentation],
            exports: [CocainesPresentation]
        };
    }
}
