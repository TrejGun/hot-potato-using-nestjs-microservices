import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { PotatoController } from "./potato.controller";
import { PotatoService } from "./potato.service";
import { potatoServiceProvider } from "./potato.provider";

@Module({
  imports: [ConfigModule],
  controllers: [PotatoController],
  providers: [PotatoService, potatoServiceProvider],
  exports: [PotatoService],
})
export class PotatoModule {}
