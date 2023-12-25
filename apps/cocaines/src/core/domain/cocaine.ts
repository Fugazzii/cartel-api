/* eslint-disable */
import { MAX_WEIGHT, MIN_WEIGHT } from "./constants";
import {
    OverweightProductException,
    UnderWeightProductException
} from "./errors";

export class Cocaine {
    private readonly _id: number;
    private _weight: number;
    private _price_per_kg: number;
    private _origin: string;

    public set setWeight(w: number) {
        if (w > MAX_WEIGHT) {
            throw new OverweightProductException();
        }

        if (w < MIN_WEIGHT) {
            throw new UnderWeightProductException();
        }

        this._weight = w;
    }

    public get pricePerKg() {
        return this._price_per_kg;
    }
    public set pricePerKg(price: number) {
        this._price_per_kg = price;
    }

    public get origin() {
        return this._origin;
    }
    public set setOrigin(origin: string) {
        this._origin = origin;
    }

    public get id() {
        return this._id;
    }
    public get weight() {
        return this._weight;
    }
}
/* eslint-enable */
