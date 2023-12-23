export interface ICacheRepository {
	save(key: string, value: any): Promise<void>;
	retrieve<T>(key: string): Promise<T>;
	remove(key: string): Promise<void>;
	clear(): Promise<void>;
}