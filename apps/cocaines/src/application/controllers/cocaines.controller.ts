import { Body, Controller, HttpCode, HttpStatus } from "@nestjs/common";
import { CocainesService } from "../services/cocaines.service";
import { CreateCocaineDto } from "../../core/usecases/dtos/create-cocaine.dto";
import { CocainesPresentation } from "../../presentation/cocaines.presentation";
import { ApiResponse } from "../../presentation/api-response";
import { Cocaine } from "../../core/domain";

@Controller("/")
export class CocainesController {
    public constructor(
        private readonly presentator: CocainesPresentation,
        private readonly cocaineService: CocainesService
    ) {}

    @HttpCode(HttpStatus.CREATED)
    public async create(
        @Body() createCocaineDto: CreateCocaineDto
    ): Promise<ApiResponse<Cocaine, unknown>> {
        try {
            const cocaine = await this.cocaineService.create(createCocaineDto);

            return this.presentator.send(cocaine, "Created a pack of cocaine");
        } catch (error) {
            return this.presentator.sendError(
                error,
                "Failed to create cocaine"
            );
        }
    }
}
