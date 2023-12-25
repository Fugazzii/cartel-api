export interface ICacheRepository {
    save<T>(key: string, value: T, time?: number): Promise<unknown>;
    retrieve(key: string): Promise<string | null>;
    remove(key: string): Promise<unknown>;
    clear(): Promise<unknown>;
}
