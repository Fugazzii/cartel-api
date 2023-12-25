export interface ICacheRepository {
    save(key: string, value: string, time?: number): Promise<unknown>;
    retrieve(key: string): Promise<string | null>;
    remove(key: string): Promise<unknown>;
    clear(): Promise<unknown>;
}
