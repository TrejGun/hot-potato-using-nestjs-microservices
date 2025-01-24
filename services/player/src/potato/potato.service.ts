import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

import type { IMessage } from "./potato.interface";
import { POTATO_SERVICE, MESSAGE_TYPE } from "./potato.constants";

@Injectable()
export class PotatoService {
  constructor(
    @Inject(POTATO_SERVICE)
    private readonly client: ClientProxy,
    private readonly configService: ConfigService,
  ) {}

  public play(payload: IMessage): Promise<IMessage | undefined> {
    console.info(`Got message from server ${payload.instance}`);
    const instance = this.configService.get("INSTANCE", "player");
    const isSuccess = Math.random() > 0.1;
    if (isSuccess) {
      return this.client
        .send<IMessage, IMessage>(MESSAGE_TYPE, {
          instance,
        })
        .toPromise();
    } else {
      return Promise.resolve({
        instance,
      });
    }
  }
}
