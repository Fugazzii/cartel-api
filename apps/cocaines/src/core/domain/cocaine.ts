import { MAX_WEIGHT, MIN_WEIGHT } from "./constants";
import { OverweightProductException, UnderWeightProductException } from "./errors";

export class Cocaine {
	private id: number;
	private weight: number;
	private price_per_kg: number;
	private origin: string;

	public set setWeight(w: number) {
		if (w > MAX_WEIGHT) {
			throw new OverweightProductException();
		}

		if (w < MIN_WEIGHT) {
			throw new UnderWeightProductException();
		}

		this.weight = w;
	}

	public set pricePerKg(price: number) {
		this.pricePerKg = price;
	}

	public set setOrigin(origin: string) {
		this.origin = origin;
	}

	public get idValue() {
		return this.id;
	}
	public get kgs() {
		return this.weight;
	}
	public get pricePerKg() {
		return this.price_per_kg;
	}
	public get originValue() {
		return this.origin;
	}

}