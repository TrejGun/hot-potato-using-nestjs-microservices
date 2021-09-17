import {Module} from "@nestjs/common";
import {Client, ClientProxy, Transport} from "@nestjs/microservices";


import {PotatoController} from "./potato.controller";
import {PotatoService} from "./potato.service";

@Module({
  controllers: [PotatoController],
  providers: [PotatoService],
  exports: [PotatoService],
})
export class PotatoModule {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL],
      queue: process.env.RMQ_QUEUE,
    },
  })
  client: ClientProxy;

  public async onApplicationBootstrap(): Promise<void> {
    console.log("!!!");
    await this.client.connect();
  }
}
