import { Module } from "@nestjs/common";
import { CocainesPresentation } from "@cocaines/presentation";

@Module({})
export class PresentationModule {
    public static forRoot() {
        return {
            module: PresentationModule,
            providers: [CocainesPresentation],
            exports: [CocainesPresentation]
        };
    }
}
