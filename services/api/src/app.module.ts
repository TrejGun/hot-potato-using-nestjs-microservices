import { Module } from "@nestjs/common";

import { HealthModule } from "./health/health.module";
import { PotatoModule } from "./potato/potato.module";
import { AppController } from "./app.controller";

@Module({
  imports: [HealthModule, PotatoModule],
  controllers: [AppController],
})
export class AppModule {}
