import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

import type { IMessage } from "./potato.interface";
import { MESSAGE_TYPE, POTATO_SERVICE } from "./potato.constants";

@Injectable()
export class PotatoService {
  constructor(
    @Inject(POTATO_SERVICE)
    private readonly client: ClientProxy,
    private readonly configService: ConfigService,
  ) {}

  public play(): Promise<IMessage | undefined> {
    const instance = this.configService.get("INSTANCE", "api");
    return this.client
      .send<IMessage, IMessage>(MESSAGE_TYPE, {
        instance,
      })
      .toPromise();
  }
}
