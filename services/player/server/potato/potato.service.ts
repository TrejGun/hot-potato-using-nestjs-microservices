import {Injectable} from "@nestjs/common";
import {Client, ClientProxy, Transport} from "@nestjs/microservices";


export interface IPayload {
  server: string;
}

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

  public play(payload: IPayload): Promise<IMessage> {
    console.info(`Got message from server ${payload.server}`);
    const isSuccess = Math.random() > 0.1;
    if (isSuccess) {
      return this.client
        .send("PLAY", {
          server: process.env.INSTANCE,
        })
        .toPromise();
    } else {
      return Promise.resolve({
        server: process.env.INSTANCE,
      });
    }
  }
}
