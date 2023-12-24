import { Injectable } from "@nestjs/common";
import { ErrorResponse, SuccessResponse } from "./api-response";

@Injectable()
export class CocainesPresentation {

	public constructor() { }

	public send<S>(data: S, message?: string): SuccessResponse<S> {
		return {
			success: true,
			message,
			data
		};
	}

	public sendError<E>(error: E, message?: string): ErrorResponse<E> {
		return {
			success: false,
			message,
			error
		};
	}


}