import { Inject, Injectable } from "@nestjs/common";
import { CreateCocaineUseCase } from "../../core/usecases/impls/create-cocaine";
import { CreateCocaineDto } from "../../core/usecases/dtos/create-cocaine.dto";

@Injectable()
export class CocainesService {
	public constructor(
		@Inject() private readonly createCocaineUseCase: CreateCocaineUseCase
	) { }

	public create(createCocaineDto: CreateCocaineDto) {
		return this.createCocaineUseCase.execute(createCocaineDto);
	}
}