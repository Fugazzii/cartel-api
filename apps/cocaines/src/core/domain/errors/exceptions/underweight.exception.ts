import { IException } from "../exception.interface";
import { ErrorMessage } from "../messages";

export class UnderWeightProductException extends IException {
	public constructor() {
		super(ErrorMessage.UnderWeightProduct);
	}
}