import * as Joi from "joi";

export const ProduceCocaineSchema = Joi.object({
	weight: Joi.number().required(),
	price_per_kg: Joi.number().required(),
	origin: Joi.string().required()
});
