import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    BadRequestException
} from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class ProduceCocaineValidationPipe implements PipeTransform {
    public constructor(private schema: ObjectSchema) { }

    public transform(value: any, _: ArgumentMetadata) {
        const { error } = this.schema.validate(value);
        if (error) {
            throw new BadRequestException(error.details[0].message);
        }
        return value;
    }
}