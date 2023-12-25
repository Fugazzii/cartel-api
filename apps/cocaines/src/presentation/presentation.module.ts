import { Module } from "@nestjs/common";
import { CocainesPresentation } from "@cocaines/presentation";

@Module({
    providers: [CocainesPresentation],
    exports: [CocainesPresentation]
})
export class PresentationModule {}
