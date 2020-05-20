import {Controller} from "@nestjs/common";
import {MessagePattern, Payload} from "@nestjs/microservices";

import {IMessage, IPayload, PotatoService} from "./potato.service";


@Controller("potato")
export class PotatoController {
  constructor( private potatoService: PotatoService) {}

  @MessagePattern("PLAY")
  start(@Payload() payload: IPayload): Promise<IMessage> {
    return this.potatoService.play(payload);
  }
}
