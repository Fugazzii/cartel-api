import { Cocaine } from "../../domain/cocaine";

export interface IRepository {
    create<T>(newRecord: T): Promise<Cocaine>;
}
