import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { NestExpressApplication } from "@nestjs/platform-express";

import { ApplicationModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);

  const configService = app.get(ConfigService);

  const rmqUrl = configService.get<string>("RMQ_URL", "amqp://localhost:5672");
  const rmqQueue = configService.get<string>("RMQ_QUEUE", "potato");

  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.RMQ,
      options: {
        urls: [rmqUrl],
        queue: rmqQueue,
        queueOptions: {
          durable: true,
        },
      },
    },
    { inheritAppConfig: true },
  );

  await app.startAllMicroservices().then(() => console.info(`Player is subscribed to ${process.env.RMQ_URL}`));

  const host = configService.get<string>("HOST", "localhost");
  const port = configService.get<number>("PORT", 3010);
  await app.listen(port, host, () => {
    console.info(`Player health check is running on http://${host}:${port}/health`);
  });
}

void bootstrap();
