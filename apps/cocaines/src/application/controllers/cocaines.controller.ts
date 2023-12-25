import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    UsePipes
} from "@nestjs/common";
import { CocainesService } from "../services/cocaines.service";
import type { Cocaine } from "@cocaines/domain";
import { ProduceCocaineDto } from "@cocaines/usecases";
import type { ApiResponse } from "@cocaines/presentation";
import { CocainesPresentation } from "@cocaines/presentation";
import { ProduceCocaineSchema, ProduceCocaineValidationPipe } from "../validation";

@Controller("/")
export class CocainesController {

    public constructor(
        private readonly presentator: CocainesPresentation,
        private readonly cocaineService: CocainesService
    ) { }

    @HttpCode(HttpStatus.CREATED)
    @Post("/cocaine")
    @UsePipes(new ProduceCocaineValidationPipe(ProduceCocaineSchema))
    public async create(
        @Body() produceCocaineDto: ProduceCocaineDto
    ): Promise<ApiResponse<Cocaine, unknown>> {
        try {
            const cocaine = await this.cocaineService.produceCocaine(
                produceCocaineDto
            );

            console.log("COcaine", cocaine);

            return this.presentator.send(cocaine, "Created a pack of cocaine");
        } catch (error) {
            console.log(error);
            return this.presentator.sendError(
                error,
                "Failed to create cocaine"
            );
        }
    }

    @HttpCode(HttpStatus.OK)
    @Get("/cocaines")
    public async findAll(): Promise<ApiResponse<Array<Cocaine>>> {
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
    public async findOne(
        @Param("id") id: number
    ): Promise<ApiResponse<Cocaine>> {
        try {
            console.log("Reached controller");
            const cocaine = await this.cocaineService.getOneProductById(id);
            return this.presentator.send(cocaine, "Returned product");
        } catch (error) {
            return this.presentator.sendError(error, "Failed to get produdct");
        }
    }
}
