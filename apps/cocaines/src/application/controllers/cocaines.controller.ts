import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post
} from "@nestjs/common";
import { CocainesService } from "../services/cocaines.service";
import { ProduceCocaineDto } from "../../core/usecases/dtos/produce-cocaine.dto";
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
    @Post("/cocaine")
    public async create(
        @Body() produceCocaineDto: ProduceCocaineDto
    ): Promise<ApiResponse<Cocaine, unknown>> {
        try {
            const cocaine = await this.cocaineService.produceCocaine(
                produceCocaineDto
            );

            return this.presentator.send(cocaine, "Created a pack of cocaine");
        } catch (error) {
            return this.presentator.sendError(
                error,
                "Failed to create cocaine"
            );
        }
    }

    @HttpCode(HttpStatus.OK)
    @Get("/cocaines")
    public async findAll() {
        try {
            const cocaine = await this.cocaineService.traverseWholeWarehouse();

            return this.presentator.send(
                cocaine,
                "Retrieved all information about cocaines from the warehouse."
            );
        } catch (error) {
            return this.presentator.sendError(
                error,
                "Failed to traverse the warehouse."
            );
        }
    }

    @HttpCode(HttpStatus.OK)
    @Get("/cocaine/:id")
    public async findOne(@Param("id") id: number) {
        try {
            const cocaine = await this.cocaineService.getOneProductById(id);

            return this.presentator.send(cocaine, "Returned product");
        } catch (error) {
            return this.presentator.sendError(error, "Failed to get produdct");
        }
    }
}
