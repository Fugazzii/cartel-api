import type { Provider } from "@nestjs/common";
import { NatsService } from "./nats.service";

export const NATS_TOKEN = Symbol("NATS_TOKEN");

export const provideNats = (natsUrl: string): Provider =>
    Object.freeze({
        provide: NATS_TOKEN,
        useValue: new NatsService(natsUrl)
    });
