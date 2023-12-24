import { NatsService } from "./nats.service";

export const NATS_TOKEN = Symbol("NATS_TOKEN");

export const provideNats = (natsUrl: string) =>
    Object.freeze({
        provide: NATS_TOKEN,
        useValue: new NatsService(natsUrl)
    });
