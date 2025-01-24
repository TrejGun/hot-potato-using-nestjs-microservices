import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

import { PotatoService } from "./potato.service";
import type { IMessage } from "./potato.interface";
import { MESSAGE_TYPE } from "./potato.constants";

@Controller("potato")
export class PotatoController {
  constructor(private potatoService: PotatoService) {}

  @MessagePattern(MESSAGE_TYPE)
  start(@Payload() payload: IMessage): Promise<IMessage | undefined> {
    return this.potatoService.play(payload);
  }
}
