import { NatsConnection, connect } from "nats";
import { IPubSub } from "@cocaines/usecases";
import { PubSubConfigOptions } from "@cocaines/domain";

export class NatsAdapter implements IPubSub {

	private client!: NatsConnection;

	public constructor(config: PubSubConfigOptions) {
		this.connect(config);
	}

	private connect({ host, port }: PubSubConfigOptions): void {
		connect({ servers: [`nats://${host}:${port}`] })
			.then(client => {
				console.log(`🚀 Connected to Nats server`);
				this.client = client;
			})
			.catch(err => {
				console.log("❌ Could not connect to Nats server");
				return err;
			});
	}

	public notify(topic: string, message: string): unknown {
		return this.client.publish(topic, message);
	}

	public publish(topic: string, message: string): unknown {
		return this.client.publish(topic, message);
	}
}
