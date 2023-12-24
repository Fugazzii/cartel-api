import { DynamicModule, Module } from "@nestjs/common";
import { NATS_TOKEN, provideNats } from "./nats.provider";

@Module({})
export class NatsModule {
    public static forRoot(natsUrl: string): DynamicModule {
        const NatsProvider = provideNats(natsUrl);

        return {
            module: NatsModule,
            providers: [NatsProvider],
            exports: [NATS_TOKEN, NatsProvider]
        };
    }
}
