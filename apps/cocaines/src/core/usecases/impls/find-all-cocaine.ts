import { Inject } from "@nestjs/common";
import { Cocaine } from "../../domain";
import { IUseCase } from "../use-case.interface";
import { IRepository } from "../ports/db-repository.interface";

export class FindAllCocaineUseCase
	implements IUseCase<undefined, Array<Cocaine>>
{
	public constructor(@Inject() private readonly cocaineRepo: IRepository) { }

	public execute(): Promise<Array<Cocaine>> {
		return this.cocaineRepo.findAll();
	}
}
