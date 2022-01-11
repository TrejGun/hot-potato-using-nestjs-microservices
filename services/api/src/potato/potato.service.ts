import { Injectable } from "@nestjs/common";
import { Client, ClientProxy, Transport } from "@nestjs/microservices";

export interface IMessage {
  server: string;
}

@Injectable()
export class PotatoService {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL],
      queue: process.env.RMQ_QUEUE,
    },
  })
  client: ClientProxy;

  public play(): Promise<IMessage | undefined> {
    return this.client
      .send<IMessage>("PLAY", {
        server: "API",
      })
      .toPromise();
  }
}
