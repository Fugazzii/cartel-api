import { Infrastructure } from "./infrastructure.token";
import { CocaineAdapter } from "./db";
import { RedisAdapter } from "./cache";
import { cacheConfig, dbConfig } from "./infrastructure.config";

export class InfrastructureFactory {
    public static create(token: Infrastructure): CocaineAdapter | RedisAdapter {
        switch (token) {
            case Infrastructure.Postgres:
                return new CocaineAdapter(dbConfig);
            case Infrastructure.Redis:
                return new RedisAdapter(cacheConfig);
        }
    }
}
