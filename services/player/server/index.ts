import {NestFactory} from "@nestjs/core";
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {ApplicationModule} from "./app.module";


async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(ApplicationModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL],
      queue: "potato",
    },
  });
  await app
    .startAllMicroservicesAsync()
    .then(() => console.info(`Email service is subscribed to ${process.env.RMQ_URL}`));
  await app.listen(process.env.PORT, process.env.HOST, () => {
    console.info(`Email service health check is running on http://${process.env.HOST}:${process.env.PORT}/health`);
  });
}

bootstrap();
