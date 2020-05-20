import {Module} from "@nestjs/common";

import {PotatoController} from "./potato.controller";
import {PotatoService} from "./potato.service";

@Module({
  controllers: [PotatoController],
  providers: [PotatoService],
  exports: [PotatoService],
})
export class PotatoModule {}
