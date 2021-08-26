import {NestFactory} from "@nestjs/core";
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {NestExpressApplication} from "@nestjs/platform-express";

import {ApplicationModule} from "./app.module";


async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL],
      queue: process.env.RMQ_QUEUE,
    },
  });

  await app
    .startAllMicroservicesAsync()
    .then(() => console.info(`Player is subscribed to ${process.env.RMQ_URL}`));

  await app.listen(process.env.PORT, process.env.HOST, () => {
    console.info(`Player health check is running on http://${process.env.HOST}:${process.env.PORT}/health`);
  });
}

void bootstrap();
