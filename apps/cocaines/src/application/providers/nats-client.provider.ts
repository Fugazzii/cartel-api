import { NATS_CLIENT } from "@cocaines/common";
import {
	Infrastructure,
	InfrastructureFactory
} from "@cocaines/infrastructure";
import type { Provider } from "@nestjs/common";

export class NatsClient {
	public static instance: NatsClient | null;
	private static provider: Provider;

	/* eslint-disable */
	private constructor() { }
	/* eslint-enable */

	public static getProvider(): Provider {
		if (!NatsClient.instance) {
			NatsClient.instance = new NatsClient();
			NatsClient.provider = {
				provide: NATS_CLIENT,
				useValue: InfrastructureFactory.create(Infrastructure.Nats)
			};
		}
		return NatsClient.provider;
	}
}
