import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class NatsService {
	private client: ClientProxy;

	public constructor(url: string) {
		this.client = ClientProxyFactory.create({
			transport: Transport.NATS,
			options: { url }
		});
	}

	public connect(): Promise<unknown> {
		return this.client.connect();
	}

	public notify(topic: string, message: string): Observable<string> {
		return this.client.emit<string, string>(topic, message);
	}

	public publish(topic: string, message: string): Observable<string> {
		return this.client.send<string, string>(topic, message);
	}
}