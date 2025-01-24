import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

import { POTATO_SERVICE } from "./potato.constants";

export const potatoServiceProvider = {
  provide: POTATO_SERVICE,
  inject: [ConfigService],
  useFactory: (configService: ConfigService): ClientProxy => {
    const rmqUrl = configService.get<string>("RMQ_URL", "amqp://localhost:5672");
    const rmqQueue = configService.get<string>("RMQ_QUEUE", "potato");
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [rmqUrl],
        queue: rmqQueue,
        queueOptions: {
          durable: true,
        },
      },
    });
  },
};
