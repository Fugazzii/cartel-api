import { IException } from "../exception.interface";
import { ErrorMessage } from "../messages";

export class OverweightProductException extends IException {
	public constructor() {
		super(ErrorMessage.OverWeightProduct);
	}
}