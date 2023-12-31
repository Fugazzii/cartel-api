export type DbConfigOptions = {
    host: string;
    port: number;
    user: string;
    database: string;
    password: string;
};

export type CacheConfigOptions = {
    host: string;
    port: number;
};

export type PubSubConfigOptions = {
    host: string;
    port: number;
};