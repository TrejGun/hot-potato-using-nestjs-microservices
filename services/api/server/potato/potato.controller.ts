import {Controller, Get} from "@nestjs/common";
import {IMessage, PotatoService} from "./potato.service";


@Controller("potato")
export class PotatoController {
  constructor(
    private potatoService: PotatoService,
  ) {
  }

  @Get()
  start(): Promise<IMessage> {
    return this.potatoService.play();
  }
}
