import type { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { Injectable, BadRequestException } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class ProduceCocaineValidationPipe implements PipeTransform {
    public constructor(private readonly schema: ObjectSchema) {}

    public transform(value: unknown, _: ArgumentMetadata): unknown {
        const { error } = this.schema.validate(value);
        if (error) {
            throw new BadRequestException(error.details[0].message);
        }
        return value;
    }
}
