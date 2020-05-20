import "./env";
import {NestFactory} from "@nestjs/core";
import {NestExpressApplication} from "@nestjs/platform-express";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

import {AppModule} from "./app.module";


async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.disable("x-powered-by");

  const options = new DocumentBuilder()
    .setTitle("Hot Potato API")
    .setDescription("API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(process.env.PORT, process.env.HOST, () => {
    console.info(`API server is running on http://${process.env.HOST}:${process.env.PORT}`);
  });
}

bootstrap();
