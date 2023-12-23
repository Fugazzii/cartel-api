import { DynamicModule, Module } from '@nestjs/common';
import { NatsService } from './nats.service';
import { NATS_TOKEN } from './nats.token';

@Module({})
export class NatsModule {
  public static forRoot(natsUrl: string): DynamicModule {

    const NatsProvider = Object.freeze({
      provide: NATS_TOKEN,
      useValue: new NatsService(natsUrl)
    });

    return {
      module: NatsModule,
      providers: [NatsProvider],
      exports: [NatsProvider]
    };

  }
}

