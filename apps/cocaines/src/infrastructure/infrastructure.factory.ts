import { Infrastructure } from "./infrastructure.token";
import { CocaineAdapter } from "./db";
import { RedisAdapter } from "./cache";
import { NatsAdapter } from "./pub-sub";
import { cacheConfig, dbConfig, pubSubConfig } from "./infrastructure.config";

type IAdapter = CocaineAdapter | RedisAdapter | NatsAdapter;

export class InfrastructureFactory {
    public static create(token: Infrastructure): IAdapter {
        switch (token) {
            case Infrastructure.Postgres:
                return new CocaineAdapter(dbConfig);
            case Infrastructure.Redis:
                return new RedisAdapter(cacheConfig);
            case Infrastructure.Nats:
                return new NatsAdapter(pubSubConfig);
        }
    }
}
