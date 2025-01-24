import { Controller, Get } from "@nestjs/common";
import { PotatoService } from "./potato.service";
import type { IMessage } from "./potato.interface";

@Controller("potato")
export class PotatoController {
  constructor(private potatoService: PotatoService) {}

  @Get()
  start(): Promise<IMessage | undefined> {
    return this.potatoService.play();
  }
}
